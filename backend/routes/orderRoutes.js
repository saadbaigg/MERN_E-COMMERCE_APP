import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getAllOrders,
  getMyOrders,
  getOrder,
  markAsDelivered,
  updateOrder,
} from "../controllers/orderController.js";

router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrder);
router.get("/", protect, admin, getAllOrders);
router.put("/:id/pay", protect, updateOrder);
router.put("/:id/delivered", protect, admin, markAsDelivered);

export default router;
