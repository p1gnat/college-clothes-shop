import express from "express";
import upload from "../middleware/upload.js";
import ClothingItem from "../models/ClothingItem.js";

const router = express.Router();

// GET all clothing items
router.get("/", async (req, res) => {
  try {
    const clothes = await ClothingItem.find();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await ClothingItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new item
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

router.post("/", async (req, res) => {
  const { image, name, rating, price, description } = req.body;

  const newItem = new ClothingItem({
    image,
    name,
    rating,
    price,
    description,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update item by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await ClothingItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await ClothingItem.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
