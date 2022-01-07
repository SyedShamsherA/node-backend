var express = require('express');
var router = express.Router();
var orderModule = require('../module/orderModule');

router.post('/saveorder', orderModule.postOrder);
router.get('/getorder', orderModule.getOrder);
router.patch('/updateOrder/:orderId', orderModule.updateOrder);
router.delete('/deleteOrder/:orderId', orderModule.deleteOrder);

module.exports = router;