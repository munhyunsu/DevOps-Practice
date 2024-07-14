require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.EXPRESS_APP_PORT;

const apiRouter = express.Router();

var counter = 0;

apiRouter.get('/', (req, res) => {
  counter = counter + 1;
  res.json({message: 'Hello, world!'});
});

apiRouter.get('/counter', (req, res) => {
  counter = counter + 1;
  res.json({'counter': `${counter}`});
});

app.use(`${process.env.EXPRESS_APP_URL_PREFIX}`, apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
