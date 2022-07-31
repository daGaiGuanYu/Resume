const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: Path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: Path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.styl$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE HTML>
        <html lang="zh">
          <head>
            <meta charset="utf8">
            <title>韦现法的简历</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-sacle=1, maximum-scale=1">
          </head>
          <body>
            <div id='page'></div>
          </body>
        </html>
      `
    }),
  ]
}