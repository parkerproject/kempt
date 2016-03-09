var requireDirectory = require('require-directory')

module.exports = function (server) {
  var controller = requireDirectory(module, './controllers')

  // Array of routes for Hapi
  var routeTable = [{
    method: 'GET',
    path: '/images/{path*}',
    config: controller.assets.images
  }, {
    method: 'GET',
    path: '/css/{path*}',
    config: controller.assets.css
  }, {
    method: 'GET',
    path: '/js/{path*}',
    config: controller.assets.js
  }, {
    method: 'GET',
    path: '/',
    config: controller.home.index
  }, {
    method: 'POST',
    path: '/email',
    config: controller.email.index
  }, {
    method: 'GET',
    path: '/thankyou',
    config: controller.confirm.index
  }]
  return routeTable
}