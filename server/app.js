require('dotenv').config();
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const ContactModel = require('./models/Contacts')
const router = require("./routes/router")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) =>{
    const  { email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                console.log(user)
                res.json(user)
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed. Please Register first...")
        }
    })
})
app.post('/register', (req, res) =>{
    const {email} = req.body;
    EmployeeModel.findOne({email: email})
    .then(employees => {
        if (employees) {
            // alert("email existed")
            res.json("Email existed!! Please sigin")   
        }else{
            EmployeeModel.create(req.body)
            res.json(employees)
        }
        
    })
    .catch(err => {
        // alert(err)
        res.json(err)})
})

app.post('/details', (req, res) =>{
    const {name, email, age, address1,address2} = req.body;
    ContactModel.findOne({email: email})
    .then(contacts => {
        if (contacts) {
            ContactModel.create(req.body)
            res.json(contacts)
        }else{
            
        }  
    })
    .catch(err => {
        res.json(err)})
})

app.get('/teams', (req, res) =>{
    EmployeeModel.find()
    .then(teams => res.json(teams))
    .catch(err => res.json(err))
})
app.get('/contacts', (req, res) =>{
    ContactModel.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
})

app.use(router);

app.listen(3001, () =>{
    console.log("server is running")
})
