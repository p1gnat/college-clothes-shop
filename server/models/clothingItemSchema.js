import mongoose from "mongoose";

const clothingItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name too short"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be positive"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ClothingItem = mongoose.model("ClothingItem", clothingItemSchema);

export default ClothingItem;
