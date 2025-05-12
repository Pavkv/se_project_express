const ClothingItem = require('../../models/clothingItem');
const ForbiddenError = require("../../utils/Errors/ForbiddenError");
const NotFoundError = require("../../utils/Errors/NotFoundError");

module.exports = (req, res, next) => {
  ClothingItem.findById(req.params.itemId)
    .orFail(() => new NotFoundError('Clothing item not found'))
    .populate('owner')
    .then(clothingItem => {
      if (req.user._id !== String(clothingItem.owner._id)) {
        return next(new ForbiddenError('You do not have permission to delete this item'));
      }
      return clothingItem.deleteOne().then(() => res.status(200).send({ message: 'Item deleted successfully' }));
    }).catch(next);
};