import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = () => {
    try {
        console.log(`db connection >>> ${process.env.MONGO_URL}`)
        mongoose.connect('mongodb+srv://lucky:lucky@cluster0.5bqnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
          console.log('db connected');
        });
      } catch (error) {
        throw new Error(`DB error ${error}`);
      }
}

export default dbConnection;