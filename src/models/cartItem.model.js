const mongoose = require("mongoose");


const CartItemSchema = new mongoose.Schema({
    cart: {
        ref: 'Cart',
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
    },
    quantity: Number,
    ingredients:[String],
    totalPrice: Number,
});

//define and export the cartItem model
const CartItem = mongoose.model('CartItem',CartItemSchema);
module.exports = CartItem;