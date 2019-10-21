require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  distDir: ".next",
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      }),

      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ];

    return config;
  }
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
