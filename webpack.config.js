module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./index.ts",
  output: {
      path: `${__dirname}/dist`,
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
