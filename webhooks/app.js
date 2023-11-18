const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3003;

const apiRouter = express.Router();

apiRouter.post('/deploy', (req, res) => {
  exec('bash /root/update-project.sh', (err, stdout, stderr) => {
    console.log(stdout);
  });
  exec('pm2 restart start-express', (err, stdout, stderr) => {
    console.log(stdout);
  });
  exec('pm2 restart start-react', (err, stdout, stderr) => {
    console.log(stdout);
  });
});

app.use('/myweb/webhook', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
