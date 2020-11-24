const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const { version } = require('./package');

module.exports = (env, { mode = 'production' } = {}) => {
  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          resolve: {
            extensions: ['.ts', '.tsx']
          },
          use: [
            // babel-loader is better at jsx handling than TypeScript's (smaller bundle size)
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  '@babel/plugin-transform-react-jsx',
                  [
                    'babel-plugin-root-import',
                    {
                      rootPathPrefix: '~',
                      rootPathSuffix: 'src'
                    }
                  ]
                ]
              }
            },
            'ts-loader'
          ],
          exclude: [/node_modules/]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            miniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [miniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        // inject: 'head',
        template: './src/index.html',
        favicon: './src/asset/favicon.ico'
      }),
      new miniCssExtractPlugin({
        filename: `bundle-v${version}.css`
      }),
      new DefinePlugin({
        DEBUG: mode === 'development',
        VERSION: JSON.stringify(version),
        CLIENT: true
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: {
        index: 'index.html'
      },
      compress: true,
      port: 8080
    }
  };
};
