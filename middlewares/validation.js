const { Joi, celebrate } = require('celebrate');
const validator = require('validator');

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
}

const validateEmail = (value, helpers) => {
  if (validator.isEmail(value)) {
    return value;
  }
  return helpers.error('string.email');
};

const validateClothingItemBody = () => {
  return celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30).messages({
        "string.min": 'The minimum length of the "name" field is 2',
        "string.max": 'The maximum length of the "name" field is 30',
        "string.empty": 'The "name" field must be filled in',
      }),
      imageUrl: Joi.string().required().custom(validateURL).messages({
        'string.empty': 'The "imageUrl" field must be filled in',
        'string.uri': 'the "imageUrl" field must be a valid url',
      }),
      weather: Joi.string().required().valid('cold', 'warm', 'hot').messages({
        "string.empty": 'The "weather" field must be filled in',
        "any.only": 'The "weather" field must be one of the following values: cold, warm, hot',
      })
    })
  });
};

const validateUserInfoBody = () => {
  return celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30).messages({
        "string.min": 'The minimum length of the "name" field is 2',
        "string.max": 'The maximum length of the "name" field is 30',
        "string.empty": 'The "name" field must be filled in',
      }),
      avatar: Joi.string().custom(validateURL).messages({
        'string.empty': 'The "avatar" field must be filled in',
        'string.uri': 'the "avatar" field must be a valid url',
      }),
      email: Joi.string().required().custom(validateEmail).messages({
        'string.empty': 'The "email" field must be filled in',
        'string.email': 'the "email" field must be a valid email',
      }),
      password: Joi.string().required().messages({
        "string.empty": 'The "password" field must be filled in',
      })
    })
  });
};

const validateAuthentication = () => {
  return celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().custom(validateEmail).messages({
        'string.empty': 'The "email" field must be filled in',
        'string.email': 'the "email" field must be a valid email',
      }),
      password: Joi.string().required().messages({
        "string.empty": 'The "password" field must be filled in',
      })
    }),
  });
};

const validateId = () => {
  return celebrate({
    params: Joi.object().keys({
      itemId: Joi.string().required().hex().length(24).messages({
        "string.empty": 'The "id" field must be filled in',
        "string.hex": 'The "id" field must be a hex string',
        "string.length": 'The "id" field must be 24 characters long',
      }),
    })
  });
};

module.exports = {
  validateClothingItemBody,
  validateUserInfoBody,
  validateAuthentication,
  validateId,
};