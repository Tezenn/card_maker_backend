const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const port = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

app.post('/makejson', (req, res) => {
  const deck = JSON.stringify(req.body);
  fs.writeFile('deck.json', deck, err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(201).send({ ok: 'ok' });
});

app.get('/download', (req, res) => {
  const file = __dirname + '/deck.json';
  res.download(file);
});

app.listen(port, () => console.log('server up'));
