require('dotenv').config();

const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.EXPRESS_APP_PORT

const apiRouter = express.Router();

apiRouter.post('/deploy', (req, res) => {
  exec('bash /root/update-project.sh', (err, stdout, stderr) => {
    exec('pm2 restart start-express', (err, stdout, stderr) => {
    });
    exec('pm2 restart start-react', (err, stdout, stderr) => {
    });
  });
});

app.use(`${process.env.EXPRESS_APP_URL_PREFIX}`, apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
