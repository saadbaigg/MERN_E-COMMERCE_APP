import express from "express"
const router = express.Router()
import { authUser, registerUser, getProfile, updateProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post("/", registerUser)
router.post("/login", authUser)
router.get("/profile", protect, getProfile)
router.put("/profile", protect, updateProfile)

export default router
