import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "qiuyuan@gmail.com",
    fullName: "Qiuyuan",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/c89f3af744f189864513d403b8d859b3.jpg",
  },

  {
    email: "jiyan@gmail.com",
    fullName: "Jiyan",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/7c510f1ba26e81548068f648ab312beb.jpg",
  },

  {
    email: "jinshi@gmail.com",
    fullName: "Jinshi",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/a645fc62c29eb38c630be9c2621d448f.jpg",
  },

  {
    email: "augusta@gmail.com",
    fullName: "Augusta",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/56733449cf5930202c6cdecb0c545357.jpg",
  },
  {
    email: "brant@gmail.com",
    fullName: "Brant",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/819166d01a1127d1e6eaa2ad9c4922cc.jpg",
  },

  {
    email: "zani@gmail.com",
    fullName: "Zani",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/349a6491318fad8185310e367fe84885.jpg",
  },

  {
    email: "scar@gmail.com",
    fullName: "Scar",
    password: "123456",
    profilePic:
      "https://img.sanishtech.com/u/7616072481e5e7c54756cb3f730f2162.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
