import express from 'express';
import projectsController from '../../controllers/projectsController.js';
import authGuard from '../../middleware/authGuard.js';
import rbac from '../../middleware/rbac.js';

const router = express.Router();

router.get('/', [authGuard.protect, rbac.authorizationChecker], projectsController.allProjects);
router.get('/:id', [authGuard.protect, rbac.authorizationChecker], projectsController.allProjectsByUser);
router.post('/', [authGuard.protect, rbac.authorizationChecker], projectsController.createProject);

export default router;