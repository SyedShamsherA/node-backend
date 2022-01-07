const Order = require('../model/Order');
const router = require('../routes');


exports.postOrder = async (req,res,next) => {
    
    const product = new Product({
        Customer : req.body.Customer,
        address : req.body.address,
        total : req.body.total,
        status : req.body.status,
        method : req.body.method,
    })
    try {
        var response = await Order.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getOrder = async (req,res,next) => {
    var response = await Order.find();
    res.send(response);
}

exports.updateOrder = async (req,res,next) => {
    const {productId} = req.params;
    var response = await Order.findByIdAndUpdate(orderId, {
        status : req.body.status
    }, {new: true})
    res.send(response);
}

exports.deleteOrder = async (req,res,next) => {
    var response = await Product.findByIdAndRemove(req.params.orderId);
    res.send(response);
}