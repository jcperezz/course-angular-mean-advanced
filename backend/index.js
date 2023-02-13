const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Start the express server
const app = express();

// Configure CORS
app.use(cors());

// Configure the JSON parser and reader
app.use( express.json() );

// Enable database conection
dbConnection();

// Rutas
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/login', require('./routes/auth.routes'));


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto '+process.env.PORT);
});