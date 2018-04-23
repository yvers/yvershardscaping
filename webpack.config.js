const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const app = path.resolve(__dirname, 'app');
const dist = path.resolve(__dirname, 'src/assets/bundle');

module.exports = {
  context: app,
  entry: {
    app: path.resolve(app, 'app.js'),
    vendor: [
      'photoswipe',
    ],
  },
  output: {
    path: dist,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					priority: 10,
					enforce: true
				},
		  },
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
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
      {
        test: /\.(eot|ttf|woff|woff2|txt|xml)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [
          'file-loader?name=[name].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  }
};
