const path = require("path");
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463
   */
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  publicPath: './',

  assetsDir: "front",

  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      // 'element-ui': 'element-ui',
      // 'jquery': 'jQuery',
      // '$': 'jQuery'

    },
    plugins: [
      new webpack.ProvidePlugin({
        // $: 'jQuery'
      })

    ]

  },

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },

  lintOnSave: undefined
};
