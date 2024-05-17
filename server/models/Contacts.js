const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    city: String
})

const EmployeeModel = mongoose.model("contacts", EmployeeSchema)
module.exports = EmployeeModel