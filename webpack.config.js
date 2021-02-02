const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      // eslint loader works
      /* {
        test: /\.ts(x?)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
              configFile: path.resolve(__dirname, '.eslintrc.client.js')
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        exclude: /node_modules/,
      }, */
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.client.json')
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true,
    }),
    // This config doesn't works
    new ESLintPlugin({
       eslintPath: require.resolve('eslint'),
       overrideConfigFile: path.resolve(__dirname, '.eslintrc.client.js'),
       context: path.resolve(__dirname, 'src/'),
       files: path.resolve(__dirname, '**/*.tsx'),
       extensions: ['tsx', 'ts'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.client.json')
      })
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
