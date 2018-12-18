const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3100;

const corsOptions = {
  origin: 'https://modest-bhabha-9ae2df.netlify.com',
  credentials: true
};

const storage = [];

app.use(cors());
app.use(express.json());

app.post('/makejson', (req, res) => {
  storage.push(req.body);
  res.status(201).send({ ok: 'ok' });
});

app.get('/download', (req, res) => {
  res.download(storage[0]);
  storage.splice(0, 1);
});

app.listen(port, () => console.log(`server up on port ${port}`));
