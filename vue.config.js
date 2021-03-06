const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports= {
  publicPath: "/",
  assetsDir: 'static',
  outputDir: 'dist',
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('assets',resolve('./src/assets'))
      .set('commonjs',resolve('./src/commonjs'))
      .set('network',resolve('./src/network'))
      .set('views',resolve('./src/views'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  // devServer: {
  //   port: 8080, // 端口号
  //   host: '127.0.0.1',
  //   open: true,
  //   disableHostCheck:true,
  //   hotOnly: false,
  //   headers:{
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   proxy: { // 跨域配置
  //     '/api': { // 过滤的api
  //       target: 'http://192.168.8.131:3000', // 要访问的URL
  //       changeOrigin: true, // true，启用跨域
  //       ws: false,
  //       pathRewrite: { // 要转发到的地址，根据需要也可不配置
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  // configureWebpack: {
  //   performance: {
  //     hints: 'warning',
  //     //入口起点的最大体积
  //     maxEntrypointSize: 50000000,
  //     //生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     //只给出 js 文件的性能提示
  //     assetFilter: function (assetFilename) {
  //       return assetFilename.endsWith('.js');
  //     }
  //   }
    // performance: {
    //   hints:false
    // }
  //}
}