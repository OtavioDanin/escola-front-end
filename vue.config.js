const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   transpileDependencies: true,
   // devServer: {
   //  proxy: 'http://api-escola'
   //  //   proxy:  {
   //  //   '/api': {
   //  //     target: 'http://api-escola',
   //  //     changeOrigin: true,
   //  //     secure: false,
   //  //     pathRewrite: { '^/api': '' }
   //  //   }
   //  // }
   // }
})
