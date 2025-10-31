const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/App.js', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js',
    clean: true, // Cleans old files before building
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // ✅ Correct path — matches your project
      filename: 'index.html',
    }),
  ],
  mode: 'production', // ✅ Set to production for deployment
};
