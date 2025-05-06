const ClothingItem = require('../../models/clothingItem');
const {BadRequestError, NotFoundError} = require("../../utils/errors");

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndUpdate(req.params.itemId, {$addToSet: {likes: req.user._id}}, {new: true},)
    .orFail()
    .then(clothingItem => res.send({data: clothingItem}))
    .catch(err => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Invalid item ID'));
      }
      else if (err.name === 'DocumentNotFoundError') {
        next(new NotFoundError('Item not found'));
      } else {
        next(err);
      }
      next(err);
    });
};