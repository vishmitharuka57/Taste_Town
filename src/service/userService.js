const User = require("../models/user.model");
const bcrypt = require("bcrypt");


module.exports = {
    async createUser(userData){

       try {
        let {fullName, emailValue,password,role} = userdata;
        const isUserExist = await User.findOne({email:emailValue})

        if(isUserExist){
            throw new Error("User already exists with email!");
        }  

        password = await bcrypt.hash(password,8);

        const user = await User.create({
            fullname,
            email: emailValue,
            password: password,
            role
        });

        return user;

       } catch (error){
        throw new Error(error.message);
       }
        

    },

    async getUserByEmail(email){
        try {
            const user = await User.findOne({email:email});
            if(!user) {
                throw new Error("User not found!");
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async findUserById(userId){
     
        try {
               const user = await user.findById(userId).populate("addresses");
        } catch (error) {
            
        }

    }

};