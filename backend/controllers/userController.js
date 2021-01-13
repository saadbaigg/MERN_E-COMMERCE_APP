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
    password
  });

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),      
    })
  } else {
    res.status(400).json({ message: 'Invalid User data' })
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
  const user = await User.findById(req.user._id)

  if(user) {
    user.name = user.body.name || user.name
    user.email = user.body.email || user.Email
    if (req.body.password) {
      user.password = req.body.password
    }
  } else {
    res.status(404).json({ message: "No User Found" });
  }

})


export { authUser, registerUser, getProfile, updateProfile };
