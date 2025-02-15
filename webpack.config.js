const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,   // console.log 제거
          drop_debugger: true,  // debugger 제거
        },
        mangle: {
          properties: true,  // 객체 속성 이름도 난독화
        },
        format: {
          comments: false,    // 주석 제거
        },
      },
      extractComments: false,  // 라이선스 주석도 제거
    })],
  },
};
