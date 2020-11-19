import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import validator from 'express-validator';
import routes from './routes';
import logger from './utils/logger';

const app = express();
const port = process.env.PORT || '3100';

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

// configure bodyParser
app.use(bodyParser.json());

// configure swagger-ui
app.use('/api-docs', express.static(
  path.join(__dirname, '../server/public/dist'),
));

// configure swagger-ui
app.use('/', express.static(
  path.join(__dirname, '../client/dist'),
));
// use the defined routes
app.use('/', routes);

// configure validator
app.use(validator());

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  logger.error(err);
  if (err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send((500, err));
  }
});


app.listen(port || 3000, () => {
  logger.info(`Started on port ${port}`);
});

export default app;
