const ClothingItem = require('../../models/clothingItem');
const {BAD_REQUEST, NOT_FOUND} = require('../../utils/constants');

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndUpdate(req.params.itemId, {$addToSet: {likes: req.user._id}}, {new: true},)
    .orFail()
    .then(clothingItem => res.send({data: clothingItem}))
    .catch(err => {
      if (err.name === 'CastError') {
        err.status = BAD_REQUEST;
        err.message = 'Invalid data passed to the methods for liking an item.';
      } else if (err.name === 'DocumentNotFoundError') {
        err.status = NOT_FOUND;
        err.message = 'Clothing item not found.';
      }
      next(err);
    });
};