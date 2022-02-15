import mongoose from "mongoose";
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'dev') dotenv.config();

const dbConnection = () => {
    try {
        // console.log(`db connection >>> ${process.env.MONGO}`)
        if (!process.env.MONGO) throw new Error('No connection string defined');
        mongoose.connect(process.env.MONGO, () => {
          console.log('db connected');
        });
      } catch (error) {
        throw new Error(`DB error ${error}`);
      }
}

export default dbConnection;
