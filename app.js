const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./utils/errors');

const {PORT = 3001} = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db');

app.use((req, res, next) => {
  req.user = {
    _id: '6806cb02497dde8d48193ea4'
  };
  next();
});

app.use('/users', require('./routes/users'));
app.use('/items', require('./routes/clothingItems'));

app.use(errorHandler);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log(`Link to the server: http://localhost:${PORT}`);
});