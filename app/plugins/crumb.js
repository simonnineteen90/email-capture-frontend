const Crumb = require('@hapi/crumb')

module.exports = {
  plugin: Crumb,
  options: {
    cookieOptions: {
      isSecure: false
    }
  }
}
