const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: [String], // array of image URLs
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
