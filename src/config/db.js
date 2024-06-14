const  mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://tharukavishmipk24:msQZPkAVMSqpeDtx@cluster0.wq5ryoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


async function connectDB(){
    return mongoose.connect(mongodbUrl)
}


module.exports = connectDB