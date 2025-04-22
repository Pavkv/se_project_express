const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .then(clothingItem => res.send({ data: clothingItem }))
    .catch(err => next(err));
};