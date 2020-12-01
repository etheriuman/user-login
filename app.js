const { static } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))

app.use(
  express.static('public'),
  bodyParser.urlencoded({extended: true})
)