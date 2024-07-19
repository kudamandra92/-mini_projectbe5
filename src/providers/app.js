const express = require('express')
const app = express()
const userRoute = require('../routers/user-router')

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use("/user", userRoute)

module.exports = app