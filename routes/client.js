const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const {
    clientCreate,
    clientShow
} = require('../controllers/client');

router.post('/', auth, clientCreate);
router.get('/', auth, clientShow);

module.exports = router;
