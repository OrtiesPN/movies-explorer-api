const router = require('express').Router();
const { editUserDataValidator } = require('../middlewares/validator');
const {
  getUserMe,
  editUserData,
} = require('../controllers/users');

router.get('/me', getUserMe);

router.patch('/me', editUserDataValidator, editUserData);

module.exports = router;
