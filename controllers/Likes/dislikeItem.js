const ClothingItem = require('../../models/clothingItem');
const BadRequestError = require("../../utils/Errors/BadRequestError");
const NotFoundError = require("../../utils/Errors/NotFoundError");

module.exports = (req, res, next) => {
  ClothingItem.findByIdAndUpdate(req.params.itemId, {$pull: {likes: req.user._id}}, {new: true})
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
    });
};