import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  let product = products.find((p) => p._id === parseInt(req.params.id));
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running IN ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
