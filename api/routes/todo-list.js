const express = require('express')
const router = express.Router()

// ex: http://localhost:3001/routes
router.get('/', (req, res) => {
  res.send('Hitting the todo list api.')
})

module.exports = router
