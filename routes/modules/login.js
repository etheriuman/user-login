const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const db = require('../../config/mongoose')
const { pass } = require('../../config/mongoose')

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({email: email})
      .then(user => {
        // 如果找不到該使用者，帶到註冊頁面
        if (!user) {
          res.render('login', {email, wrongEmail: 1})
        // 如果找到，判斷密碼是否正確
        } else {
          // 密碼錯誤：
          if (user.password !== password) {
            res.render('login', {email, wrongPassword: 1})
          // 密碼正確：
          } else {
            res.render('index', {name: user.firstName})
          } 
        }
      })
})

router.post('/register', (req, res) => {
  const firstName = req.body.firstName
  const email = req.body.email
  const password = req.body.password
  const passwordReconfirm = req.body.passwordReconfirm
  User.findOne({email: email})
      .then(user => {
        if (password !== passwordReconfirm) {
          res.render('register', {passwordRetry: 1, firstName, email})
        } else {
          if (user) {
            res.render('register', {emailExist: 1, firstName, email})
          } else {
            User.create({ 
              firstName: firstName,
              email: email,
              password: password
            })
          }
        }
      })
      .then(() => {
        res.render('login', {email})
      })
})


module.exports = router