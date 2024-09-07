const path = require("path");

module.exports = {
  mode: "production", // 生产模式
  entry: "./src/lib/main.ts", // 入口文件
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出路径
    library: {
      type: "module", // 输出为 ES 模块格式
    },
  },
  experiments: {
    outputModule: true, // 启用模块输出
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
