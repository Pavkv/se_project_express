const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const { NOT_FOUND } = require('./utils/constants');
const errorHandler = require('./utils/errors');

const {PORT = 3001} = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db');

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/items', require('./routes/clothingItems'));

app.use((req, res) => {
  res.status(NOT_FOUND).send({ message: 'Requested resource not found' });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Link to the server: http://localhost:${PORT}`);
});