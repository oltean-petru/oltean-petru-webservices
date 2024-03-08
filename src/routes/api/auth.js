import express from 'express';
import authController from '../../controllers/authController.js';

const router = express.Router();

router.post('/login',authController.login);
router.post('/refresh', authController.refreshToken);
router.post('/logout', authController.logout);

export default router;