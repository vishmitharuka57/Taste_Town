const { default: mongoose } = require("mongoose");



//define the orderItem schema
const OrderItemSchema = new mongoose.Schema({
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    },
    quantity: Number,
    totalPrice: Number,
    ingredients: [String],  

});

//define and exports the orderItem model
const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
module.exports = OrderItem;
