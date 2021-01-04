import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc     auth user & get token
// @route    POST /api/user/login
// @access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

export { authUser };
