const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
//Middle ware 1
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('hello world');
  next();
});

//3) Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

//4)Start Server
module.exports = app;
