// @ts-nocheck
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from:
            process.env.BROWSER_ENV === "CHROME"
              ? "./manifest.v3.json"
              : "./manifest.json",
          to: "../dist/manifest.json",
        },
        {
          from: "./icons",
          to: "../dist/icons",
        },
      ],
    }),
  ],
  entry: {
    background: "./src/index.js",
    "content_scripts/youtube": "./src/content_scripts/youtube.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist/"),
  },
};
