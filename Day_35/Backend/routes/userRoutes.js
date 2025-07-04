const express = require('express');
const router  = express.Router();
const {

    createUser,
    addMoney,
    checkBalance,
    createOrder,
    checkOrderStatus,
    orderHistory

} = require ('../controllers/userController');

router.post('/create', createUser);
router.post('/wallet/add',addMoney);
router.get('/wallet/balance/:id',checkBalance);

router.post('/order', createOrder);
router.get('/order/status/:id', checkOrderStatus);
router.get('/order/history/:userId', orderHistory);


module.exports= router;