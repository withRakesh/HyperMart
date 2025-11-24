const product = require('../models/products');
const express = require('express');
const router = express.Router();

// GET ALL PRODUCT
router.get('/products', async (req, res) => {
    try{
        const products = await product.find();
        if(!products){
            res.status(500).json({message: 'No products'})
        }

        res.status(200).json(products);
    }catch(err){
        res.status(400).json({error : err.message})
    }
})

// GET SINGLE PRODUCT
router.get('/products/:id', async (req, res) => {
  try {
    const singleProduct = await product.findById(req.params.id);

    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;