const webpack = require('webpack');
const path = require('path');

const app = path.resolve(__dirname, 'app');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  context: app,
  entry: {
    app: path.resolve(app, 'app.js'),
  },
  output: {
    path: dist,
    filename: '[name].[hash].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: module => (
        module.context && module.context.indexOf('node_modules') >= 0
      ),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
};
