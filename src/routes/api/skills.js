import express from 'express';
import skillsController from '../../controllers/skillsContorller.js';
import authGuard from '../../middleware/authGuard.js';

const router = express.Router();

router.get('/', authGuard.protect, skillsController.allSkills);
router.post('/', authGuard.protect, skillsController.createSkill);
router.put('/:id', authGuard.protect, skillsController.updateSkill);
router.delete('/:id', authGuard.protect, skillsController.deleteSkill);

export default router;