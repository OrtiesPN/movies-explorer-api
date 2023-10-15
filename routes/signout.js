const router = require('express').Router();

router.post('/', (req, res) => {
  res.clearCookie('jwt');
  res.send('Вы вышли из аккаунта');
});

module.exports = router;
