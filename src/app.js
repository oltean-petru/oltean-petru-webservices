import express from 'express';
import connect from './db/connect.js';
import api from './routes/api/index.js';
import roleService from './services/rolesService.js';

const app = express()
connect()

//create default roles and permissions
// try {
//   roleService.createRoles()
//   console.log('Default roles created successfully!');
// } catch (error) {
//   console.log(error)
// }

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'OK' })
});

app.use('/api/v1', api)


export default app