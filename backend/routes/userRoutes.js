import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getProfile,
  updateProfile,
  getUsers,
  deleteUser,
  getUser,
  editUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.get("/", protect, admin, getUsers);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.get("/:id", protect, admin, getUser);
router.put("/:id", protect, admin, editUser);
router.post("/login", authUser);
router.delete("/:id", protect, admin, deleteUser);

export default router;
