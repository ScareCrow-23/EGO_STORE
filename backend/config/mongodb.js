import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connection established");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/EGO-Store`);
};

export default connectDB;
