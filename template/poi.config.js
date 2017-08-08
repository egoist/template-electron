const appPkg = require('./app/package')

module.exports = {
  entry: 'src/index.js',
  dist: 'app/renderer',
  html: {
    title: appPkg.productName
  },
  // In production mode
  // Electron can only load from relative path
  homepage: './',
  // Exclude built-in Electron modules from bundle
  extendWebpack(config) {
    config.target('electron-renderer')
    config.node
      .set('__filename', false)
      .set('__dirname', false)
    return config
  }
}
