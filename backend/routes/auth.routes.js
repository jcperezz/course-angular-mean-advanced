const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { fieldsValidate } = require('../middlewares/fields-validations.middleware');

const router = Router();

router.get('/', 
    [
        check('email', 'Email es obligatorio').not().isEmpty(),
        check('email', 'Email no valido').isEmail(),
        check('password', 'Password obligatorio').not().isEmpty(),
        fieldsValidate
    ], login);

module.exports = router;