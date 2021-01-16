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

  if(orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' })
  } else {
      const order = new Order({
          user: req.user._id,
          orderItems,
          shippingAddress,
          paymentMethod,
          taxPrice,
          shippingPrice,
          totalPrice,
      })
      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
  }

});

// @desc     get order by id
// @route    GET /api/order/id
// @access   Private
const getOrder = asyncHandler(async (req, res) => {

  const order = await Order.findById(req.params.id).populate('user', 'name email')

  if(order) {
    res.status(200).json(order)
  } else {
    res.status(404).json({ message: 'No order found' })
  }

});

export { createOrder, getOrder };
