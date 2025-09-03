import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', (req, res) => authController.registerUser(req, res));
router.post('/login', (req, res) => authController.loginUser(req, res));

export default router;
