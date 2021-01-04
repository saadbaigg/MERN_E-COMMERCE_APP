import express from "express"
const router = express.Router()
import { authUser, getProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post("/login", authUser)
router.get("/profile", protect, getProfile)

export default router
