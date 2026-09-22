const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = 3001;
let client;

// I reuse one MongoClient for my database connections.
app.get("/", async (req, res) => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing");
    }

    if (!client) {
      client = new MongoClient(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      });
    }

    await client.connect();
    // A ping checks that my database is responding right now.
    await client.db("admin").command({ ping: 1 });
    res.json({ message: "Successfully connected to the database!" });
  } catch (error) {
    // I keep passwords and connection strings out of my logs.
    console.error("Database connection failed. Check .env and Atlas settings.");
    res.status(500).json({ message: "Failed to connect to the database." });
  }
});

app.listen(port, () => {
  console.log(`My server is running at http://localhost:${port}`);
});
