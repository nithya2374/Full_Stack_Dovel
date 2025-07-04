const User = require ('../models/User');
const Order = require('../models/Order');
const Product = require('../models/product');



// Create User
exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.send(user);
};

//create Order
exports.createOrder = async (req, res) => {
  const { userId, productId } = req.body;

  const user = await User.findById(userId);
  const product = await Product.findById(productId);

  if (!user || !product) return res.status(404).send("User/Product not found");
  if (product.quantity < 1) return res.status(400).send("Product out of stock");
  if (user.wallet < product.price) return res.status(400).send("Insufficient balance");

  user.wallet -= product.price;
  product.quantity -= 1;

  const order = new Order({
    userId,
    productId,
    totalAmount: product.price
  });

  await user.save();
  await product.save();
  await order.save();

  res.send({ message: "Order placed", order });
};

// Add Money to Wallet
exports.addMoney = async (req, res) => {
  const { userId, amount } = req.body;
  const user = await User.findById(userId);
  user.wallet += amount;
  await user.save();
  res.send({ message: "Money added", wallet: user.wallet });
};

// Check Wallet Balance
exports.checkBalance = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send({ wallet: user.wallet });
};

// Check Order Status
exports.checkOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('productId');
  res.send(order);
};

// Order History
exports.orderHistory = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId }).populate('productId');
  res.send(orders);
};