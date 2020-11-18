import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = process.env.PORT || '3100';

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

// configure bodyParser
app.use(bodyParser.json());

// use the defined routes
app.use('/', routes);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err);
  if (err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send((500, err));
  }
});


app.listen(port || 3000, () => {
  console.log(`Started on port ${port}`);
});

export default app;