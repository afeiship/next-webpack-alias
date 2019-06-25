var nx = require('next-js-core2');
require('../src/next-webpack-alias');

describe('Basic test', () => {
  test('normal && array valie', function() {
    var alias1 = {
      react: 'react',
      'react-dom': ['@hot-loader/react-dom', false]
    };
    var alias2 = {
      react: 'react',
      'react-dom': ['@hot-loader/react-dom', true]
    };

    var res1 = nx.webpackAlias(alias1);
    var res2 = nx.webpackAlias(alias2);

    expect(res1).toEqual({
      react: 'react'
    });

    expect(res2).toEqual({
      react: 'react',
      'react-dom': '@hot-loader/react-dom'
    });
  });
});
