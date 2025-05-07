require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const { errors } = require('celebrate');
const { NOT_FOUND } = require('./utils/errorCodes');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const {PORT = 3001} = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: [
      'http://localhost:3000',
      'https://whatowearexpress.twilightparadox.com',
      'https://www.whatowearexpress.twilightparadox.com',
    ],
    credentials: true,
  },
));

mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db');

app.use(requestLogger);

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/items', require('./routes/clothingItems'));

app.use(errorLogger);

app.use(errors());
app.use((req, res) => {
  res.status(NOT_FOUND).send({ message: 'Requested resource not found' });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});