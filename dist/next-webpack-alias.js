/*!
 * name: @feizheng/next-webpack-alias
 * url: https://github.com/afeiship/next-webpack-alias
 * version: 1.0.0
 * date: 2019-11-23T07:44:23.506Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.webpackAlias = function(inObject) {
    var result = {};
    nx.forIn(inObject, function(key, value) {
      switch (true) {
        case value instanceof Array && value.length === 2:
          value[1] && (result[key] = value[0]);
          break;
        default:
          result[key] = value;
          break;
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.webpackAlias;
  }
})();

//# sourceMappingURL=next-webpack-alias.js.map
