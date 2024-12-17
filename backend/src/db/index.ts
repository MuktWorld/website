import mongoose from "mongoose";
import DB_NAME from "../constant";

const connectDB = async (): Promise<void> => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    const typedError = error as Error; // Type assertion
    console.error(`Error: ${typedError.message}`);
    process.exit(1);
  }
};

export default connectDB;

