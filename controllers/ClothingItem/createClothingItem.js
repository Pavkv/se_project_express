const ClothingItem = require('../../models/clothingItem');

module.exports = (req, res, next) => {
  console.log(req.user._id);
  const { name, weather, imageUrl} = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then(clothingItem => res.send({ data: clothingItem }))
    .catch(err => next(err));
};