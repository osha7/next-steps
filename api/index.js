const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});