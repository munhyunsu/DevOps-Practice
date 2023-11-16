const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3003;

const apiRouter = express.Router();

apiRouter.post('/deploy', (req, res) => {
});

app.use('/myweb/webhook', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
