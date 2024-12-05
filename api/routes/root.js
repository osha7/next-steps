const express = require('express');
const router = express.Router();

// ex: http://localhost:3001/routes
router.get('/', (req, res) => {
    res.send('This is the routes path.')
});

module.exports = router;