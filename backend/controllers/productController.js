import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc     fetch all products
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});

// @desc     fetch single product
// @route    GET /api/products/:id
// @access   Public
const getProductById = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @desc     delete product
// @route    DELETE /api/products/:id
// @access   Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Deleted Successfully" });
  } else {
    res.status(404).json({ message: "No Product Found" });
  }
});

// @desc     add product
// @route    POST /api/products
// @access   Private
const addProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product({
    user: req.user._id,
    name: "Sample name",
    image: "/images/alexa.jpg",
    brand: "Sample brand",
    category: "Sample category",
    description: "Sample Description",
    price: 0,
    countInStock: 0,
    numReviews: 0,
  });
  const createdProduct = await newProduct.save();
  res.status(201).json(createdProduct);
});

// @desc     update product
// @route    PUT /api/products/:id
// @access   Private
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
    numReviews,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.description = description;
    product.price = price;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "No Product found" });
  }
});

// @desc     add product review
// @route    POST /api/products/:id/review
// @access   Private
const addProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400).json({ message: "Already reviewed" });
    }

    const review = {
      name: req.user.name,
      rating,
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Added Review" });
  } else {
    res.status(404).json({ message: "No Product found" });
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
  addProductReview,
};
