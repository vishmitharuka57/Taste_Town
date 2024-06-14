const { HostAddress } = require('mongodb');
const { mongo, default: mongoose } = require('mongoose');
const mongoose = require('mongoose ');

const UserSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["ROLE_CUSTOMER","ROLE_OWNER"],
        default:"ROLE_CUSTOMER"
    },
    orders:[
       {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Order"  //table name
       }, 
    ],
    favourites:[
        {
            name:String,
             description:String,
             images:[]
        }],
        HostAddresses:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Address",
            },
        ],
});

const User = mongoose = mongoose.model("User", UserSchema)

module.exports = User;