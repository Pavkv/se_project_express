const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  ClothingItem.findById(req.params.itemId)
    .orFail()
    .populate('owner')
    .then(clothingItem => {
      if (req.user._id !== String(clothingItem.owner._id)) {
        const error = new Error('You do not have permission to delete this item');
        error.name = 'ForbiddenError';
        return next(error);
      }
      return clothingItem.deleteOne().then(() => res.status(200).send({ message: 'Item deleted successfully' }));
    }).catch(next);
};