const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  totalAmount: Number,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'delivered'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);
