import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc     fetch order
// @route    GET /api/order
// @access   Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: "No order items" });
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc     get order by id
// @route    GET /api/order/:id
// @access   Private
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "No order found" });
  }
});

// @desc     update order
// @route    PUT /api/order/:id/pay
// @access   Private
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "No order found" });
  }
});

// @desc     get my orders
// @route    GET /api/myorders
// @access   Private
const getMyOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user._id });
  res.status(200).json(order);
});

// @desc     get all orders (only for admin)
// @route    GET /api/orders
// @access   Private
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "name email");

  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404).json({ message: "No orders found" });
  }
});

export { createOrder, getOrder, updateOrder, getMyOrders, getAllOrders };
