const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            drop_debugger: true,
            dead_code: true
          },
          mangle: true,
          output: {
            comments: false,
            beautify: false
          }
        },
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackConfig
