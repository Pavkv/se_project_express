const User = require('../../models/user');

module.exports = (req, res, next) => {
  console.log(req.body)
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => next(err));
};