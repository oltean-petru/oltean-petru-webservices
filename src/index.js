import dotenv from 'dotenv';
import app from './app.js';
dotenv.config({ path: '../.env' })

const port = process.env.PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
})