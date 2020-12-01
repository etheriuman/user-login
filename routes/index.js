const express = require('express')
const router = express.Router()

const login = require('./modules/login.js')
const home = require('./modules/home.js')

router.use('/login', login)
router.use('/', home)

module.exports = router