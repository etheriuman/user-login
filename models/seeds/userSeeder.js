const User = require('../user.js')
const db = require('../../config/mongoose')
const usersList = require('./users.json')

db.once('open', () => {
  User.create(
    usersList.users
  )
  .then(() => db.close())
})