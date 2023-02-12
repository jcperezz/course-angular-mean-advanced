const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.URL_DATASOURCE);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la bd');
    }
}

module.exports = {
    dbConnection
}