const mongoose = require('mongoose');


//define the Cart schema
const CartSchema =  new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
    items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item', 
        }
    ],
    total: Number,
});

//define and export cart model
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;



