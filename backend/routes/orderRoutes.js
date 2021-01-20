import express from "express"
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import { createOrder, getAllOrders, getMyOrders, getOrder, updateOrder } from '../controllers/orderController.js'

router.post("/", protect, createOrder)
router.get("/myorders", protect, getMyOrders)
router.get("/:id", protect, getOrder)
router.put("/:id/pay", protect, updateOrder)
router.get("/", protect, admin, getAllOrders)

export default router