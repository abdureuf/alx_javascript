const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    port: 8080,
  },
};
module.exports = {
    mode: 'development',
    // rest of your webpack configuration
  };