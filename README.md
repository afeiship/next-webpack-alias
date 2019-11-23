# next-webpack-alias
> Special alias for webpack.

## installation
```bash
npm install -S @feizheng/next-webpack-alias
```

## usage
```js
import nxWebpackAlias from 'next-webpack-alias';

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
