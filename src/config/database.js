import mongoose from "mongoose";

export async function connectDB(connectionString) {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
