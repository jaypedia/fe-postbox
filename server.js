const express = require('express');
const path = require('path');
const constants = require('./data/constants.json');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/constants', (req, res) => {
  res.json(constants.result);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
