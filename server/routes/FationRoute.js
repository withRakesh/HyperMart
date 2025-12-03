 
const express = require("express");
const router = express.Router();
const FationProduct = require('../models/Fation')

// GET ALL PRODUCT
router.get("/Fationproducts", async (req, res) => {
  try {
    const products = await    FationProduct.find();
    if (!products) {
      res.status(500).json({ message: "No products" });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET SINGLE PRODUCT
router.get("/Fationproducts/:id", async (req, res) => {
  try {
    const singleProduct = await   FationProduct.findById(req.params.id);

    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Store kitchen products in database
router.post("/Fationproducts", async (req, res) => {
  try {
    const {
      name,
      image,
      category,
      subCategory,
      price,
      unit,
      description,
      stock,
      rating,
    } = req.body;

    if (
      !name ||
      !image ||
      !category ||
      !subCategory ||
      !price ||
      !unit ||
      !description ||
      !stock ||
      !rating
    ) {
      return res.status(400).json({ message: "fill all feilds" });
    }

    const newProduct = new  FationProduct({
      name,
      image,
      category,
      subCategory,
      price,
      unit,
      description,
      stock,
      rating
    });
     
    await newProduct.save();
    res.status(200).json({message: 'product added successfully'})
 
  } catch (err) {
    res.status(400).json({ message: "server error", err: {err} });
  }
});
 

module.exports = router;
