const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  images: {
    type: [String], // array of image URLs
    required: true,
  },

  specification: {
    type: String,
  },

  stock: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

 
module.exports = mongoose.model('products', productSchema)
