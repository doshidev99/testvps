const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log('hello');
  res.json({ name: 'truong' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
