const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const webpack = require("webpack");

const packages = [];
packages.push(path.join(__dirname, "../common/src"));
packages.push(path.join(__dirname, "src"));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
    plugins: [
      // Inject the React Native "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      }),
    ],
  },
};
