const mongoose = require("mongoose");


//define the category schema
const CategorySchema = new mongoose.Schema({
    name: String,
    cafe:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
    },

});

//define and exports the category model
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;