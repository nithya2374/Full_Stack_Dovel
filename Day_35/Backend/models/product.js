const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('product', productSchema);
