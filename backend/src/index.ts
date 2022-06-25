import express from 'express';
import dotenv from 'dotenv';
import getAll from './routes/getAll.js';
import mongoose, { MongooseError } from "mongoose";
dotenv.config();

const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
  dbName: 'vending-machine'
});
const db = mongoose.connection;

const app = express();
app.use(express.json());
app.use('/cola', getAll);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});

db.on('error', (error: MongooseError) => {
  console.log(error)
});

db.once('connected', () => {
  console.log('Database Connected');
})