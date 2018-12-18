const express = require('express');
const https = require('https');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3100;

const corsOptions = {
  origin: 'https://modest-bhabha-9ae2df.netlify.com',
  credentials: true
};

const storage = [];

app.use(cors(corsOptions));
app.use(express.json());

app.post('/makejson', (req, res) => {
  console.log('until here all good');
  storage.push(req.body);
  res.status(201).send({ ok: 'ok' });
});

app.get('/download', (req, res) => {
  res.download(storage[0]);
  storage.splice(0, 1);
});

const server = https.createServer(app);

server.listen(port, () => console.log('https server on'));
