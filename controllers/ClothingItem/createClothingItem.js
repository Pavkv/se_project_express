const ClothingItem = require('../../models/clothingItem');
const {BAD_REQUEST} = require('../../utils/constants');

module.exports = (req, res, next) => {
  console.log(req.user._id);
  const { name, weather, imageUrl} = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then(clothingItem => res.send({ data: clothingItem }))
    .catch(err => {
      err.status = BAD_REQUEST;
      err.message = 'Invalid data passed to the methods for creating an item.';
      next(err);
    });
};