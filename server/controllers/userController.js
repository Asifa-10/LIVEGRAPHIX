const Employee = require( '../models/Employee');

const getUser = async (req, res) =>{
    const users = await Employee.find({user: req.user._id});
    res.json(users);
}

const getUserById = async (req, res) =>{
    const user = await Employee.find(req.params.id);

    if (user) {
        res.json(user);
    }else{
        res.status(404).json({message: "User not found"})
    }
    
    res.json(user);
}

module.exports = {getUser,getUserById};