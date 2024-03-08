import express from 'express';
import projectsController from '../../controllers/projectsController.js';

const router = express.Router();

router.get('/', projectsController.allProjects);
router.get('/:id', projectsController.allProjectsByUser);
router.post('/', projectsController.createProject);

export default router;