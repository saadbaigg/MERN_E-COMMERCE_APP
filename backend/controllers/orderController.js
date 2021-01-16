import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc     fetch order
// @route    GET /api/order
// @access   Private
const getOrder = asyncHandler(async (req, res) => {
  const {
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if(orderItems.length === 0) {
      res.status(400)
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

export { getOrder };
