const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api',
    {
      target: "https://www.cccccc.online",
      enable: true,
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }))
}