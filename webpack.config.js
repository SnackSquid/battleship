const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/main.js',
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Baddieship',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/i,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};