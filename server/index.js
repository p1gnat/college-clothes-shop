import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import clothingRoutes from "./routes/clothingRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

console.log("working");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(cors());
app.use(express.json());
app.use("/api/clothes", clothingRoutes);
app.use(errorHandler);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}/`)
    );
  })
  .catch((err) => console.error(err));
