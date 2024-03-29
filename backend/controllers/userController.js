import asyncHandler from "express-async-handler";
import generateToken from "../utlis/generateToken.js";
import User from "../models/userModel.js";

// @desc     auth user & get token
// @route    POST /api/user/login
// @access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid Email or Password" });
  }
});

// @desc     register user & hash password
// @route    POST /api/users
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid User data" });
  }
});

// @desc     get user profile
// @route    GET /api/user/profile
// @access   Private
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).json({ message: "No User Found" });
  }
});

// @desc     update user profile
// @route    PUT /api/user/profile
// @access   Private
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: "No User Found" });
  }
});

// @desc     get all users (for admin only)
// @route    GET /api/users
// @access   Private
const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "No Users Found" });
  }
});

// @desc     get delete user
// @route    GET /api/users/:id
// @access   Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove()
    res.json({ message: "Deleted Successfully" });
  } else {
    res.status(404).json({ message: "No User Found" });
  }
});

// @desc     get user by id (only for admin)
// @route    GET /api/users/:id
// @access   Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "No User Found" });
  }
});

// @desc     edit
// @route    PUT /api/users/:id
// @access   Private
const editUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404).json({ message: "No User Found" });
  }
});

export { authUser, registerUser, getProfile, updateProfile, getUsers, deleteUser, getUser, editUser };
