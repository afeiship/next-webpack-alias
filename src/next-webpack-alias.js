(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.webpackAlias = function(inObject) {
    var result = {};
    nx.each(inObject, function(key, value) {
      switch (true) {
        case value instanceof Array && value.length === 2:
          value[1] && (result[key] = value[0]);
          break;
        default:
          result[key] = value;
          break;
      }
      return result;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.webpackAlias;
  }
})();
