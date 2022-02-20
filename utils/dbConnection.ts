import mongoose from "mongoose";
import dotenv from 'dotenv';
import logger from "./logger";

if (process.env.NODE_ENV === 'dev') dotenv.config();

const dbConnection = () => {
    try {
        if (!process.env.MONGO) throw new Error('No connection string defined');
        mongoose.connect(process.env.MONGO, () => {
          logger.info('db connected');
        });
      } catch (error) {
        throw new Error(`DB error ${error}`);
      }
}

export default dbConnection;
