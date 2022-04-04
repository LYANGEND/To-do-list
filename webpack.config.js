const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'docs'), 
    clean: true, 
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],

  },

  devServer: {
    static: './dist', 
  },
};