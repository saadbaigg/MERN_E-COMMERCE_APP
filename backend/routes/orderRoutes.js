import express from "express"
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { createOrder, getOrder } from '../controllers/orderController.js'

router.post("/", protect, createOrder)
router.get("/:id", protect, getOrder)

export default router