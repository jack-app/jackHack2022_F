const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "レシピクラッシャー",
    },
  },
});
