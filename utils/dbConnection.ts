import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('db connected');
      } catch (error) {
        throw new Error(`DB error ${error}`);
      }
}

export default dbConnection;