const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const {
    userRegister,
    userLogin,
    userMe
} = require('../controllers/users');

router.post('/register', userRegister);

router.post('/login', userLogin);

router.get('/me', auth, userMe);

module.exports = router;
