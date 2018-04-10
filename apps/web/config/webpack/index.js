/**
 * Base Webpack Configuration
 */

const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// Default NODE_ENV to 'production'
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Path helpers
const rootDir = path.resolve(__dirname, "../../../../");
const sourceDir = path.resolve(rootDir, "src");
const destDir = path.resolve(rootDir, "apps/web/build");

const baseConfig = {
  context: rootDir,
  entry: ["./apps/web/index.ts"],
  output: {
    path: destDir,
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".vue", ".js"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "apps/web/index.html"),
    }),
  ],
};

module.exports = merge(baseConfig, require(`./${process.env.NODE_ENV}.js`));
