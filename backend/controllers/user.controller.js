const { response } = require('express');
const User = require('../models/user.model');

const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email role google');

    res.json({
        ok: true,
        users
    });

};

const createUser = async (req, res = response) => {

    // 1. Read the body request
    const { email, password, nombre } = req.body;

    const existsEmail = await User.findOne({ email });

    if(existsEmail) {
        return res.status(400).json({
            ok: false,
            msg: 'El correo ya está registrado',
        });
    }

    try {

        // 2. Parse the body request to User object
        const newUser = new User(req.body);
        // 3. Save on the BD
        await newUser.save();
        // 4. Build the response
        res.json({
            ok: true,
            user: newUser,
        });

    } catch (error) {
        // 5. Catch errors
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no esperado'
        });
    }



}

module.exports = {
    getUsers,
    createUser,
};