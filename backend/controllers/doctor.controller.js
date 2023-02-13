const { request, response } = require('express');
const Doctor = require('../models/doctor.model');
const { validationResult } = require('express-validator');

const findAll = async (req = request, res = response) => {
    const doctors = await Doctor.find({})
        .populate('hospital', 'name img')
        .populate('user', 'name img');

    res.json({
        ok: true,
        doctors,
        uid: req.uid
    });
}

const create = async (req = request, res = response) => {
    const newDoctor = new Doctor({
        user: req.uid,
        ...req.body
    });


    try {
        await newDoctor.save();

        res.json({
            ok: true,
            doctor: newDoctor,
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
        ok: true,
    });
}

const remove = async (req = request, res = response) => {
    res.json({
        ok: true,
    });
}

module.exports = {
    findAll,
    create,
    update,
    remove,
};