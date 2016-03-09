'use strict'
require('dotenv').load()
const collections = ['kempt']
const mongojs = require('mongojs')
const db = mongojs.connect(process.env.MONGODB_URL, collections)

module.exports = {
  index: {
    handler: (request, reply) => {
      console.log(request.payload)
      db.kempt.save(request.payload, () => {
        return reply.redirect('/thankyou')
      })
    }
  }
}