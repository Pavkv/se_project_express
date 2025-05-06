const ClothingItem = require('../../models/clothingItem');
const {BadRequestError} = require("../../utils/errors");

module.exports = (req, res, next) => {
  const { name, weather, imageUrl} = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then(clothingItem => res.send({ data: clothingItem }))
    .catch(err => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Invalid data provided for clothing item creation'));
      } else {
        next(err);
      }
    });
};