import express from 'express';
import cookieParser from 'cookie-parser';
import https from 'https';
import fs from 'fs';

import dbConnect from './db/index';

import rootRouter from './routes/root';

import { config as envConfig } from 'dotenv';

const privateKey  = fs.readFileSync('./key.pem', 'utf8');
const certificate = fs.readFileSync('./cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

envConfig();


(async () => {
  const app = express();
  const port = 4000;


  app.use('/', express.static('./src/build', {
    setHeaders(res: express.Response, path: string) {
      res.set('Content-Type', 'text/html; charset=UTF-8')
    }
  }))

  app.use((req, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'https://test.loc:3000');

    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Headers', 'X-Auth');

    response.setHeader('Content-Type', 'application/json');
    next();
  });

  app.use(cookieParser());

  await dbConnect();

  app.use('/', rootRouter);

  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(port, () => {
    console.log(`Server's up! http://localhost:${port} 🚀`);
  });
})();
