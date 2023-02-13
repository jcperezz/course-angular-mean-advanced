const { response } = require('express');
const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email role google');

    res.json({
        ok: true,
        users
    });

};

const createUser = async (req, res = response) => {

    // 1. Read the body request
    const { email, password } = req.body;

    const existsEmail = await User.findOne({ email });

    if (existsEmail) {
        return res.status(400).json({
            ok: false,
            msg: 'El correo ya está registrado',
        });
    }

    try {

        // 2. Parse the body request to User object
        const newUser = new User(req.body);

        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

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

const updateUser = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const findUser = await User.findById(uid);

        if( !findUser ) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }

        const fields = req.body;
        delete fields.password;
        delete fields.google;

        const updateUser = await User.findByIdAndUpdate(uid, fields, { new: true});

        res.json({
            ok: true,
            usuario: updateUser
        })
        
    } catch (error) {
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
    updateUser,
};