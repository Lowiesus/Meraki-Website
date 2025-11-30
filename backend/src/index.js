import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";

import path from "path";
import { fileURLToPath } from "url";

// Load .env as early as possible so modules imported below (controllers, cloudinary, etc.) can read env vars.
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..", ".env") });

// Dynamic imports for modules that may read process.env on import time
const { connectDB } = await import("./lib/db.js");
const authRoutes = (await import("./routes/auth.route.js")).default;
const messageRoutes = (await import("./routes/message.route.js")).default;
const postsRoutes = (await import("./routes/post.route.js")).default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/api/posts", postsRoutes);


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
    // Try to listen on PORT, but if the port is in use try the next one(s).
    let currentPort = PORT;
    const maxRetries = 5;
    let attempts = 0;

    server.on("listening", () => {
      console.log(`server is running on PORT: ${currentPort}`);
    });

    server.on("error", (err) => {
      if (err && err.code === "EADDRINUSE") {
        attempts += 1;
        if (attempts > maxRetries) {
          console.error(
            `Port ${currentPort} is in use and max retries (${maxRetries}) exceeded.\n` +
              `Either free the port or set a different PORT in your environment (.env).`
          );
          process.exit(1);
        }

        const nextPort = currentPort + 1;
        console.warn(`Port ${currentPort} in use, trying ${nextPort}... (attempt ${attempts}/${maxRetries})`);
        currentPort = nextPort;

        // Try listening on the new port
        try {
          server.listen(currentPort);
        } catch (listenErr) {
          // If listen throws synchronously, log and let the 'error' handler manage retries
          console.warn("Listen attempt failed, will retry via error handler:", listenErr.message || listenErr);
        }
      } else {
        console.error("Server error:", err);
        process.exit(1);
      }
    });

    // Initial listen
    server.listen(currentPort);
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
