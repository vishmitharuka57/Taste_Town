const { default: mongoose } = require("mongoose");


//define the ingredientsItem schema
const IngredientsItemSchema = new mongoose.Schema({
    name: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IngredientCategory',
    },
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
    },
    inStoke: {
        type: Boolean,
        default:true,
    },

});

//define and exports IngredientsItem model
const IngredientsItem =mongoose.model('IngredientCategory',IngredientsItemSchema);
module.exports = IngredientsItem;