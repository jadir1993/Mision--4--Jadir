const express = require('express');
const authControllers = require('../controllers/authControllers');
const router = express.Router();

router.get('/login', authControllers.authLoginGet);
router.post('/login', authControllers.authLoginPost);
router.get('/register', authControllers.authRegisterGet);
router.post('/register', authControllers.authRegisterPost);

module.exports = router;