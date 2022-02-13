import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = () => {
    try {
        console.log(`db connection >>> ${process.env.MONGO_URL}`)
        mongoose.connect(process.env.MONGO_URL!, () => {
          console.log('db connected');
        });
      } catch (error) {
        throw new Error(`DB error ${error}`);
      }
}

export default dbConnection;