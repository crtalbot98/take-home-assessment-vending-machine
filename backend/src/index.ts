import express from 'express';
import dotenv from 'dotenv';
import getAll from './routes/getAll.js';
import updateOne from './routes/updateOne.js';
import initDB from './db.js';

dotenv.config();

const app = express();

initDB();

app.use(express.json());
app.use('/cola', getAll);
app.use('/cola', updateOne);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});