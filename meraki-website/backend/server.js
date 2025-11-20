import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("API running...");
});

// mount routes
app.use("/api/users", userRoutes);

// connect to MongoDB
// prefer IPv4 loopback to avoid IPv6 (::1) resolution issues on some setups
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/meraki_db';
console.log('Using Mongo URI:', mongoUri);

mongoose.connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err.message));

// connection event logging
mongoose.connection.on('connected', () => console.log('Mongoose connected to', mongoUri));
mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

app.listen(5000, () => console.log("Server running on port 5000"));