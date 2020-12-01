const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect('mongodb://localhost/user-login', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb connection failed!!')
})

db.once('open', () => {
  console.log('mongodb is now connected!!')
})

module.exports = db