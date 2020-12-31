import express from "express";
import asyncHandler from 'express-async-handler'
const router = express.Router();
import Product from "../models/productModel.js";

router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

router.get("/:id", (req, res) => {
  let product = products.find((p) => p._id === parseInt(req.params.id));
  res.json(product);
});

export default router;
