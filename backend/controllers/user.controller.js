const { response } = require('express');
const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const {generateJwt} = require('../helpers/jwt.helper');

const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email role google');

    res.json({
        ok: true,
        users,
        uid: req.uid
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

        const token = await generateJwt( newUser.id );

        // 4. Build the response
        res.json({
            ok: true,
            user: newUser,
            token
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

        if (!findUser) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }

        const { password, google, ...fields } = req.body;

        const updateUser = await User.findByIdAndUpdate(uid, fields, { new: true });

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

const deleteUser = async (req, res = response) => {


    const uid = req.params.id;

    try {


        const findUser = await User.findById(uid);

        if (!findUser) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }

        await User.findByIdAndDelete(uid);

        return res.json({
            ok: true,
            msg: 'Borrado'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};