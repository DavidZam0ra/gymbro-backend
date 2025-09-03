const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', (req, res) => authController.registerUser(req, res));
router.post('/login', (req, res) => authController.loginUser(req, res));

module.exports = router;
