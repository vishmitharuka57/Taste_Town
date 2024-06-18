const { default: mongoose } = require("mongoose");


//define the foo schema
const FoodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    foodCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    images: [String],
    available: Boolean,
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe ',
    },
    isVegetarian: Boolean,
    isSeasonal: Boolean,
    ingredient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IngredientsItem',
    }],
    creationDate:{
        type: Date,
        default: Date.now,
    },
});

//define and export the food model
const Food = mongoose.model('food', FoodSchema);
module.exports = Food;