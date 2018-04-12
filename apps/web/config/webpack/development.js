/**
 * Development Webpack Configuration
 */
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  // https://github.com/webpack-contrib/webpack-serve#options
  serve: {
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
  },
};
