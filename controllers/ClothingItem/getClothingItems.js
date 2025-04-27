const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  ClothingItem.find({})
    .populate('owner')
    .then(clothingItems => res.send({ data: clothingItems }))
    .catch(err => next(err));
};