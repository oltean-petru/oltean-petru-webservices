import express from 'express';
import authGuard from '../../middleware/authGuard.js';

import roleServices from '../../services/rolesService.js';
const router = express.Router();

router.post('/', authGuard.protect, async (req, res) => {
  const { body } = req
  const addNewRole = await roleServices.addNewRoles(body)
  res.json(addNewRole)
});


export default router;