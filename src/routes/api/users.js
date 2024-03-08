import express from 'express';
import usersController from '../../controllers/usersController.js';

const router = express.Router();

router.get('/',usersController.allUsers);
router.post('/', usersController.createUser);
router.put('/', usersController.updateUser);
router.patch('/', usersController.patchUser);

export default router;