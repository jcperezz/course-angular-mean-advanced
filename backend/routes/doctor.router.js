const { Router } = require('express');
const { check } = require('express-validator');
const { findAll, create, update, remove } = require('../controllers/doctor.controller');
const { fieldsValidate } = require('../middlewares/fields-validations.middleware');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.get('/', validarJWT, findAll);

router.post('/',
    [
        validarJWT,
        check('name', 'Campo obligatorio').not().isEmpty(),
        check('hospital', 'El id de hospital no es valido').isMongoId(),
        fieldsValidate
    ],
    create);

router.put('/:id',
    [
        validarJWT,
        check('name', 'Campo obligatorio').not().isEmpty(),
        fieldsValidate
    ], update);


router.delete('/:id', validarJWT, remove);

module.exports = router;