const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../utils/config');
const {UNAUTHORIZED} = require('../../utils/constants');

module.exports = (req, res, next) => {
  const {email, password} = req.body;

  User.findUserByCredentials(email, password, next)
    .then((user) => {
      res.send({
        token: jwt.sign({_id: user._id}, JWT_SECRET, {expiresIn: "7d",})
      });
    })
    .catch(err => {
       err.status = UNAUTHORIZED;
       err.message = 'Authorization required';
       next(err);
    });
};