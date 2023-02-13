const { response } = require('express');
const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


const login = async (req, res = response) => {

    try {

        const {email, password} = req.body;

        const foundUser = await User.findOne({ email });

        if(!foundUser) {
            return res.status(404).json({
                ok: false,
                msg: 'Email o password no encontrados',
            });
        }
        
        const isValid = bcrypt.compareSync(password, foundUser.password);

        if(!isValid){
            return res.status(404).json({
                ok: false,
                msg: 'Email o password no encontrados',
            });
        }

        return res.json({
            ok: true,
            msg: 'Email y password validos',
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

module.exports = { login };