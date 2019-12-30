const path = require('path');

module.exports = {
  entry: './src/code.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};


// The only important part to note here is that we're defining our app's entry point to ./src/code.ts
// -- this is where we will be working in throughout this series. Notice the .ts extension, this is for TypeScript.
// If you didn't want to use TypeScript, you would just change this to a regular .js file.
