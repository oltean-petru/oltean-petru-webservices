import express from 'express';
import skillsController from '../../controllers/skillsContorller.js';

const router = express.Router();

router.get('/', skillsController.allSkills);
router.post('/', skillsController.createSkill);

export default router;