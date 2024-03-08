import express from 'express';

import users from './users.js';

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/users', users);

export default router;