import express from "express";
import http from "http";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../..", ".env") });

const PORT = process.env.PORT ? Number(process.env.PORT) : 5001;
const MONGO_URI =
  process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGOURL;

if (!MONGO_URI) {
  console.error(
    "Missing MongoDB connection string. Set MONGO_URI or MONGODB_URI in your .env (project root)."
  );
  process.exit(1);
}

const app = express();
const server = http.createServer(app);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// start server after DB connects
async function start() {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log("server is running on PORT:" + PORT);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
