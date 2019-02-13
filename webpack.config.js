const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');


module.exports = env => {
  if (env.platform == 'edge') {
    return {
      entry: {
        inject: "./src/inject.js"
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js"
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
          }
        ]
      },
      mode: "production",
      plugins: [
        new CopyPlugin([
          { from: './images', to: 'images' },
          { from: './src/manifest-edge.json', to: 'manifest.json' }
        ]),
        new webpack.DefinePlugin({
          'process.env.platform': JSON.stringify(env.platform || 'chrome')
        }),
      ]
    }
  } else {
    return {
      entry: {
        inject: "./src/inject.js"
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js"
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
          }
        ]
      },
      mode: "production",
      plugins: [
        new CopyPlugin([
          { from: './images', to: 'images' },
          { from: './src/manifest.json', to: 'manifest.json' }
        ]),
        new webpack.DefinePlugin({
          'process.env.platform': JSON.stringify(env.platform || 'chrome')
        }),
      ]
    }
  }
};
