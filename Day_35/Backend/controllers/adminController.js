const Product = require('../models/product');
const Order = require('../models/Order');

// Add Product
exports.addProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  const product = new Product({ name, price, quantity });
  await product.save();
  res.send({ message: "Product added", product });
};

// Edit Product
exports.editProduct = async (req, res) => {
  const { name, price } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, price },
    { new: true }
  );
  res.send({ message: "Product updated", product });
};

// Update Quantity
exports.updateQuantity = async (req, res) => {
  const { quantity } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  );
  res.send({ message: "Quantity updated", product });
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ message: "Product deleted" });
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

// View All Orders
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('userId').populate('productId');
  res.send(orders);
};

// Accept Order
exports.acceptOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).send("Order not found");

  order.status = "accepted";
  await order.save();

  res.send({ message: "Order accepted", order });
};

// Deliver Order
exports.deliverOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).send("Order not found");

  order.status = "delivered";
  await order.save();

  res.send({ message: "Order delivered", order });
};
