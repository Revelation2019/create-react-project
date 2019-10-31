const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: './',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      // 处理js、jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }, 
      // 处理样式
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  optimization: {

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '主文件',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['app']
    })
  ]
}