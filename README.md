# next-webpack-alias
> Special alias for webpack

## installation
```bash
npm install -S afeiship/next-webpack-alias --registry=https://registry.npm.taobao.org
```

## usage
```js
var res = nx.webpackAlias({
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
