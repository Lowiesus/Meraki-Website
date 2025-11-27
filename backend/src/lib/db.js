import mongoose from "mongoose";

export async function connectDB() {
  const MONGO_URI =
    process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGOURL;
  if (!MONGO_URI) {
    throw new Error(
      "MONGO_URI not set. Make sure dotenv loads the correct .env file."
    );
  }

  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB");
  return mongoose.connection;
}
