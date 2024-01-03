const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/vue_learn/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/mixins.scss"; @import "~@/styles/vars.scss";`
      }
    }
  },
})
