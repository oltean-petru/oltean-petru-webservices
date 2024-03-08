import express from 'express';
import projectsController from '../../controllers/projectsController.js';
import authGuard from '../../middleware/authGuard.js';
import rbac from '../../middleware/rbac.js';

const router = express.Router();

router.get('/', projectsController.allProjects);
router.get('/home', projectsController.threeRecentProjects);
router.get('/:id', [authGuard.protect, rbac.authorizationChecker], projectsController.allProjectsByUser);
router.post('/', [authGuard.protect, rbac.authorizationChecker], projectsController.createProject);
router.put('/:id', [authGuard.protect, rbac.authorizationChecker], projectsController.updateProject);
router.delete('/:id', [authGuard.protect, rbac.authorizationChecker], projectsController.deleteProject);

export default router;