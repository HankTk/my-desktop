const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// Load .env file from the root of the MyClient directory
const envPath = path.resolve(__dirname, '../.env');
console.log('Webpack renderer config: .env path being used:', envPath);
const env = dotenv.config({ path: envPath }).parsed || {};

// Create an object for DefinePlugin. Only REACT_APP_ variables are exposed.
const envKeys = Object.keys(env).reduce((prev, next) => {
  if (next.startsWith('REACT_APP_')) {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
  }
  return prev;
}, {});
console.log('Webpack renderer config: envKeys for DefinePlugin:', envKeys);

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: require('./rules.webpack'),
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};