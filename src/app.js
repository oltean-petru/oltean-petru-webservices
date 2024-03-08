import express from 'express';
import connect from './db/connect.js';
import api from './routes/api/index.js';

const app = express()
connect()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'OK'})
});

app.use('/api/v1', api)


export default app