const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!')
  // console.log('request', req.route)
})

// Include route files
const routes = require('./routes/root')
const todoList = require('./routes/todo-list')

// Use routes
app.use('/routes', routes)

app.use('/todo-list', todoList)
