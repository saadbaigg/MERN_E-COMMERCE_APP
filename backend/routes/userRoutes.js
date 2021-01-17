import express from "express"
const router = express.Router()
import { authUser, registerUser, getProfile, updateProfile, getUsers } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.get("/", protect, admin, getUsers)
router.post("/", registerUser)
router.post("/login", authUser)
router.get("/profile", protect, getProfile)
router.put("/profile", protect, updateProfile)

export default router
