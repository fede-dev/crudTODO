const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes'))

module.exports = app