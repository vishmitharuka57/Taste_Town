const mongoose = require('mongoose');

//define the address schema
const AddressSchema = new mongoose.Schema({
    fullName: String,
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
});

//define and export the address model
const Address = mongoose.model('Address', AddressSchema); //address table
module.exports = Address;