import mongoose, { MongooseError } from "mongoose";

export default function initDB() {
  const mongoURL = process.env.MONGODB_URL;

  mongoose.connect(mongoURL, {
    dbName: 'vending-machine'
  });
  
  const db = mongoose.connection;

  db.on('error', (error: MongooseError) => {
    console.log(error)
  });
  
  db.once('connected', () => {
    console.log('Database Connected');
  })
}