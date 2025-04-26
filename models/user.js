const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  avatar: {
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value)
      },
      message: 'You must enter a valid URL',
    },
    required: true
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value)
      },
      message: 'You must enter a valid Email address',
    },
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
});

userSchema.statics.findUserByCredentials = function (email, password, next) {
  if (!email || !password) {
    const error = new Error('Email and password are required');
    error.name = 'ValidationError';
    return next(error);
  }

  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        const error = new Error('Incorrect email or password');
        error.name = 'UnauthorizedError';
        return next(error);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            const error = new Error('Incorrect email or password');
            error.name = 'UnauthorizedError';
            return next(error);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);