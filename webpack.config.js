var path = require('path');
var webpack = require('webpack');

const TARGET = process.env.TARGET;
const rootPath = path.resolve(__dirname);
const config = {
  paths: {
    dev: path.join(rootPath, 'dist'),
    ghPages: path.join(rootPath, 'static')
  }
};

if(TARGET === 'dev') {
  module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    output: {
      path: config.paths.dev,
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', 'css']
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }]
    }
  };
} else if (TARGET === 'gh-pages') {
  module.exports = {
    devtool: 'eval',
    entry: [
      './src/index'
    ],
    output: {
      path: config.paths.ghPages,
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', 'css']
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }]
    }
  };
}
