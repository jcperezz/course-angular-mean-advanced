const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, createUser } = require('../controllers/user.controller');
const {fieldsValidate} = require('../middlewares/fields-validations.middleware')

const router = Router();

router.get('/', getUsers);

router.post('/', [
        check('name', 'Campo obligatorio').not().isEmpty(),
        check('password', 'Password obligatorio').not().isEmpty(),
        check('email', 'Email es obligatorio').not().isEmpty(),
        check('email', 'Email no valido').isEmail(),
        fieldsValidate
    ],
    createUser);

module.exports = router;