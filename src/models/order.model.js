const { default: mongoose } = require("mongoose");



const OrderSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    cafe:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
    },
    totalAmount: Number,
    orderStatus: String,
    createdAt: {
        type: Date,
        default: Date,now,
    },
    deliveryAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
    }],
    totalItem: Number,
    totalPrice: Number,
});
 
//define and export the order model
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;