const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { addUser } = require('../controllers/users');

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3), // для простоты проверок
    name: Joi.string().min(2).max(30),
  }),
}), addUser);

module.exports = router;
