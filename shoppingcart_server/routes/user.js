const express = require('express');
const router = express.Router();

const { signIn } = require('../controller/user');

router.post('/user/signin', signIn);

module.exports = router;