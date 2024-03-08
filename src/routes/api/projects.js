import express from 'express';
import projectsController from '../../controllers/projectsController.js';
import authGuard from '../../middleware/authGuard.js';

const router = express.Router();

router.get('/', authGuard.protect, projectsController.allProjects);
router.get('/:id', authGuard.protect, projectsController.allProjectsByUser);
router.post('/', authGuard.protect, projectsController.createProject);

export default router;