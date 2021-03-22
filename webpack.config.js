const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname + '/src/index.js')
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { 
    fallback: {
      util: require.resolve("util/"),
      "zlib": false,
      "fs": false,
      "crypto": false,
      "http": false,
      "stream": false,
      "buffer": false,
      "net": false,
    },
    extensions: ["*", ".js", ".jsx"]
   },
  output: {
    path: path.resolve(__dirname + "/public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};