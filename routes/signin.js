const router = require('express').Router();
const { signinValidator } = require('../middlewares/validator');
const { signin } = require('../controllers/users');

router.post('/', signinValidator, signin);

module.exports = router;
