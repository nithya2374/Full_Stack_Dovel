const express = require('express');
const router = express.Router();
const {
  addProduct,
  editProduct,
  updateQuantity,
  deleteProduct,
  getAllProducts,
  getAllOrders,
  acceptOrder,
  deliverOrder
} = require('../controllers/adminController');

// Product Management
router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.patch('/product/:id/quantity', updateQuantity);
router.delete('/product/:id', deleteProduct);
router.get('/products', getAllProducts);

router.get('/order', getAllOrders);
router.patch('/order/:id/accept', acceptOrder);
router.patch('/order/:id/deliver', deliverOrder);

module.exports = router;
