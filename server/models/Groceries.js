const mongoose = require("mongoose");

const   GroceriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
    rating: {
      type: Number,
      default: 0,  
      min: 0,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Groceries",  GroceriesSchema);


 
