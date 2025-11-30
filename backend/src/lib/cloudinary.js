import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

// Load .env (this will be a no-op if env vars are already provided by the environment)
config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  // Fail fast with an actionable message so logs point directly to missing config
  console.error("Missing Cloudinary configuration. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in your environment or .env file.");
  console.error("Example .env entries:\nCLOUDINARY_CLOUD_NAME=your_cloud_name\nCLOUDINARY_API_KEY=1234567890\nCLOUDINARY_API_SECRET=your_secret");
  // Throw to stop the server from starting with invalid config
  throw new Error("Cloudinary config missing. See server logs for required environment variables.");
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;