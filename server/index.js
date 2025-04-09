import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

console.log("working");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}/`)
    );
  })
  .catch((err) => console.error(err));
