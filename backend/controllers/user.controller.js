 const User = require('../models/user.model');
 
 const getUsers = (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });

};

const createUser = async (req, res) => {
    
    // 1. Read the body request
    const { email, password, nombre } = req.body;

    const newUser = new User( req.body );

    await newUser.save();

    res.json({
        ok: true,
        user: newUser,
    });

}

module.exports = {
    getUsers,
    createUser,
};