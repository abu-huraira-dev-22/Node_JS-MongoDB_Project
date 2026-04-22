const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    userName:{
        require:true,
        unique: true,
        type: String
    },
    email:{
        require:true,
        unique: true,
        type: String
    },
    password:{
        require:true,
        type: String
    }
})

module.exports = UserSchema