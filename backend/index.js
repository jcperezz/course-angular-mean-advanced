const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Start the express server
const app = express();

// Configure cros
app.use(cors());

// Enable database conection
dbConnection();

// Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });

});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto '+process.env.PORT);
});