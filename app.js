const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

const port = 3000

require('./config/mongoose')

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))

app.use(
  express.static('public'),
  bodyParser.urlencoded({extended: true}),
  routes
)

app.listen(port, ()  => {
  console.log(`the express server is listening on http://localhost:${port}/login`)
})