import express from "express"
const router = express.Router()
import { getOrder } from '../controllers/orderController.js'

router.get("/", getOrder)

export default router