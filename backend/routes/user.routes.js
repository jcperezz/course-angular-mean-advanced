const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const { fieldsValidate } = require('../middlewares/fields-validations.middleware');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.get('/', validarJWT, getUsers);

router.post('/',
    [
        validarJWT,
        check('name', 'Campo obligatorio').not().isEmpty(),
        check('password', 'Password obligatorio').not().isEmpty(),
        check('email', 'Email es obligatorio').not().isEmpty(),
        check('email', 'Email no valido').isEmail(),
        fieldsValidate
    ],
    createUser);

router.put('/:id',
    [
        validarJWT,
        check('name', 'Campo obligatorio').not().isEmpty(),
        check('email', 'Email es obligatorio').not().isEmpty(),
        check('email', 'Email no valido').isEmail(),
        fieldsValidate
    ], updateUser);


router.delete('/:id', validarJWT, deleteUser);

module.exports = router;