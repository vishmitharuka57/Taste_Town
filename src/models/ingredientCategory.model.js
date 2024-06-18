const { default: mongoose } = require("mongoose");


//define the IngredientCategory schema
const IngredientCategorySchema = new mongoose.Schema({
    name: String,
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
    },
    ingredients:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IngredientItem',
    }]
});

//define and exports IngredientCategory model
const IngredientCategory =mongoose.model('IngredientCategory',IngredientCategorySchema);
module.exports = IngredientCategory;













