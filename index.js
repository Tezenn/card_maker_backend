const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/makejson', (req, res) => {
  console.log(req.body);
  fs.writeFile('message.json', JSON.stringify(req.body), err => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.status(201).send({ ok: 'ok' });
  });
});

app.get('/download', (req, res) => {
  res.download(__dirname + '/message.json', 'message.json');
});

app.listen(3100, () => console.log('server up'));
