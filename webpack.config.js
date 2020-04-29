var path = require('path');
var webpack = require('webpack');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var rootPath = path.resolve(__dirname);

if (process.env.NODE_ENV !== 'development') {
  module.exports = {
    entry: [
      path.resolve(rootPath, 'src/component.jsx')
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js',
      // export itself to a UMD require library convention
      libraryTarget: "umd",
      // name of the global var
      library: "dgxSkipNavigationLink"
    },
    externals: {
      // Required in order to ignore library within other components
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          },
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  };
} else {
  module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/app.jsx'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js',
      publicPath: '/static/'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      ]
    }
  };
}
