const express = require('express')
const router = express.Router()

const login = require('./modules/login')

router.use('/login', login)

module.exports = router