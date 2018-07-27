'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = env.process.ENV || 430

app.use(express.static(path.join(__dirname, 'views')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.sendStatus(HttpStatus.OK)
  }
  next()
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})