const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    age: Number,
    phoneNo: Number,
    access: String
})

const EmployeeModel = mongoose.model("teams", EmployeeSchema)
module.exports = EmployeeModel