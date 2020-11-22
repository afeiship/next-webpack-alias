# next-webpack-alias
> Special alias for webpack.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-webpack-alias
```

## usage
```js
import '@jswork/next-webpack-alias';

const res = nxWebpackAlias({
  react: 'react',
  'react-dom': ['@hot-loader/react-dom', true]
});

// result
{
  react: 'react',
  'react-dom': '@hot-loader/react-dom'
}

// if false
{
  react: 'react'
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-webpack-alias/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-webpack-alias
[version-url]: https://npmjs.org/package/@jswork/next-webpack-alias

[license-image]: https://img.shields.io/npm/l/@jswork/next-webpack-alias
[license-url]: https://github.com/afeiship/next-webpack-alias/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-webpack-alias
[size-url]: https://github.com/afeiship/next-webpack-alias/blob/master/dist/next-webpack-alias.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-webpack-alias
[download-url]: https://www.npmjs.com/package/@jswork/next-webpack-alias
