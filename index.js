const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3100;

const corsOptions = {
  origin: 'https://modest-bhabha-9ae2df.netlify.com',
  credentials: true
};

//app.use(cors(corsOptions));
app.use(express.json());

app.options('*', cors());

app.get('/lol', (req, res) => res.send({ hey: 'yo' }));

app.post('/makejson', (req, res) => {
  console.log(req.body);
  fs.writeFile('message.json', JSON.stringify(req.body), err => {
    if (err) {
      res.send({ error: err });
    }
    console.log('The file has been saved!');
    res.status(201).send({ ok: 'ok' });
  });
});

app.get('/download', (req, res) => {
  res.download(__dirname + '/message.json', 'message.json');
});

app.listen(port, () => console.log('server up'));
