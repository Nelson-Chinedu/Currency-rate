// import "regenerator-runtime/runtime";
import '@babel/polyfill'
import express from 'express';
import winstonEnvLogger from 'winston-env-logger';

import route from './route/index';
import checkQueryParam from './middleware/index';

const app = express();
const port = process.env.PORT || 4000;


app.use('/api', checkQueryParam, route);

app.listen(port, () => {
  winstonEnvLogger.info({
    message: `Server started on port ${port}`, 
  })
})
