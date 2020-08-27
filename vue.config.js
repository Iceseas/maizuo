module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}