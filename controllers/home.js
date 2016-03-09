module.exports = {
  index: {
    handler: (request, reply) => {
      reply.view('home', {})
    }
  }
}