import express from 'express'
import config from 'config';
const app = express()
import Routes from './routes/router.js'
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'
import cors from 'cors'
app.use(express.json());
app.use(cors());
import morgan from 'morgan'
import Logger from './views/logger.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Helmet from 'helmet';
import Compression from 'compression'
process.env.NODE_ENV ?? 'localDev';

process
  .on('unhandledRejection', (reason, promise) => {
    Logger.info(
      `: ---- : unhandledRejection : ---- : ${reason} : ---- : Unhandled Rejection at Promise : ---- : ${promise} : ---- :`
    );
  })
  .on('warning', (reason, promise) => {
    Logger.info(
      `: ---- :warning : ---- : ${reason} : ---- : warning message : ---- : ${promise} : ---- :`
    );
  })
  .on('uncaughtException', err => {
    Logger.info(
      `: ---- : uncaughtException : ---- : ${err} : ---- : Uncaught Exception thrown : ---- :`
    );
    process.exit(1);
  });

new Routes(app);

const swaggerFile = JSON.parse(
  fs.readFileSync('./views/swagger-api-view.json', 'utf-8')
);
app.use(morgan("tiny", { "stream": Logger.stream }));
app.use(express.static('./views/logs'));
app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '100mb' }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(Helmet(), Compression());



app.get('/', (req, res) => {
  res.redirect('/explorer')
})
app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
  Logger.info(`App listening at http://localhost:3000`)
})