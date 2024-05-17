const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: String,
    email: String,
    age: Number,
    phoneNo: Number,
    password: String
})

const TeamModel = mongoose.model("employees", TeamSchema)
module.exports = TeamModel