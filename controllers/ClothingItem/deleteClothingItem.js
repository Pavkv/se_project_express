const ClothingItem = require('../../models/clothingItem');
const {ForbiddenError} = require("../../utils/errors");

module.exports = (req, res, next) => {
  ClothingItem.findById(req.params.itemId)
    .orFail()
    .populate('owner')
    .then(clothingItem => {
      if (req.user._id !== String(clothingItem.owner._id)) {
        next(new ForbiddenError('You do not have permission to delete this item'));
      }
      return clothingItem.deleteOne().then(() => res.status(200).send({ message: 'Item deleted successfully' }));
    }).catch(next);
};