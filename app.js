const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const swaggerOptions = {
  apiVersion: '1.0.0'
}
const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: 1500
})

const routes = require('./routes')(server)

// Export the server to be required elsewhere.
module.exports = server

// Start the server
server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: swaggerOptions
  }], function (err) {
  if (err) console.log(err)
  server.views({
    path: './views',
    engines: {
      html: require('swig')
    }
  })
  server.route(routes)
  server.start(() => console.log('Server started at: ' + server.info.uri))
})