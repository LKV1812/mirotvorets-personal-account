const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const GLOBAL_CSS_REGEXP = /\.global.css$/;
const GLOBAL_SCSS_REGEXP = /\.global.scss$/;

const styleLoaders = (loader) => {
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEV,
        modules: {
          mode: 'local',
          localIdentName: '[name]__[local]-[hash:base64:5]',
        },
        onlyLocals: true,
      }
    },
  ]

  if (loader) loaders.push(loader);

  return loaders;
}

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoaders('sass-loader'),
        exclude: GLOBAL_SCSS_REGEXP
      },
      {
        test: GLOBAL_SCSS_REGEXP,
        use: [`css-loader`, 'sass-loader']
      },
      {
        test: /\.css$/,
        use: styleLoaders(),
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [`css-loader`]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts'
        },
      },
      {
        test: /\.(jpeg|jpg|svg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/img',
        },
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
