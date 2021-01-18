import express from "express"
const router = express.Router()
import { admin, protect } from "../middleware/authMiddleware.js";
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js'

router.get("/", getProducts)
router.get("/:id", getProductById)
router.delete("/:id", protect, admin, deleteProduct);

export default router
