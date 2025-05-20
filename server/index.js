import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import clothingRoutes from "./routes/clothingRoutes.js";
import authRoutes from "./routes/auth.js";
import errorHandler from "./middleware/errorHandler.js";

console.log("working");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/clothes", clothingRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
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
