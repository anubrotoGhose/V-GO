require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const outingRoutes = require('./routes/outings')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/outings', outingRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.VGO_DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & Listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })