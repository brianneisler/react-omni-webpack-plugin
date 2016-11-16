# react-omni-webpack-plugin
Webpack plugin for react-omni


## Build Status

[![npm version](https://badge.fury.io/js/react-omni-webpack-plugin.svg)](https://badge.fury.io/js/react-omni-webpack-plugin)<br />
[![Build Status](https://travis-ci.org/brianneisler/react-omni-webpack-plugin.svg)](https://travis-ci.org/brianneisler/stutter)<br />
[![NPM](https://nodei.co/npm/react-omni-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-omni-webpack-plugin/)


## Install

```js
npm install --save-dev react-omni-webpack-plugin
```

## Example webpack.config
```js
import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ReactOmniPlugin from 'react-omni-webpack-plugin'

const DIRECTORY = path.join(__dirname)

export default {
  entry: [
    path.join(__dirname, '../index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlPlugin(),
    new ReactOmniPlugin()
  ]
}
```
