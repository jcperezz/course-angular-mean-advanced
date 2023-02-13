const { request, response } = require('express');
const Hospital = require('../models/hospital.model');
const { validationResult } = require('express-validator');

const findAll = async (req = request, res = response) => {

    const fromRow = Number(req.query.from) || 0; 

    const [ hospitals, total ] = await Promise.all([
        Hospital.find({})
        .populate('user', 'name img')
        .skip(fromRow)
        .limit(5),
        Hospital.count()
    ]);

    res.json({
        ok: true,
        hospitals,
        uid: req.uid,
        total
    });
}

const create = async (req, res = response) => {

    const newHospital = new Hospital({
        user: req.uid,
        ...req.body
    });


    try {
        await newHospital.save();

        res.json({
            ok: true,
            hospital: newHospital,
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

const update = async (req = request, res = response) => {
    res.json({
        ok: true
    });
}

const remove = async (req = request, res = response) => {
    res.json({
        ok: true
    });
}

module.exports = {
    findAll,
    create,
    update,
    remove,
};