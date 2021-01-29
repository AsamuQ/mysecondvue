module.exports = {
    publicPath: './',       //相对路径
    devServer: {
        port: 8081,
        proxy: {
            //配置跨域
            '/accountApi': {
                target: 'http://120.27.246.232:8080/',
                ws: true,   //是否跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/accountApi': '/'
                }
            }
        }
    }
}