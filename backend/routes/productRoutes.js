import express from "express";
const router = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../controllers/productController.js";

router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
router.post("/", protect, admin, addProduct);
router.put("/:id", protect, admin, updateProduct);

export default router;