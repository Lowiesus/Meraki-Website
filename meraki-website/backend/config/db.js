const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://irianandam_db_user:<db_password>@meraki-cluster.uyad8bh.mongodb.net/?appName=Meraki-cluster";

const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    }
});

async function connectDB() {
    try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB (Compass/Atlas working!)");
    } catch (err) {
    console.error("MongoDB connection error:", err);
    }
}

module.exports = connectDB;
