const mongoose = require("mongoose")

const userDB = new mongoose.Schema({
    email :{
        type: String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

// now we need to create a collection 
const Register= new mongoose.model("Register", userDB);
module.exports = Register;
