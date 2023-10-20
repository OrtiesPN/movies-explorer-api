const router = require('express').Router();
const { addUserValidator } = require('../middlewares/validator');
const { addUser } = require('../controllers/users');

router.post('/', addUserValidator, addUser);

module.exports = router;
