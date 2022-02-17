//conexion a mongoDB

const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BASE DE DATOS CONECTADA')
    } catch (error) {
        console.log(error);
        throw new Error('ERROR EN LA CONEXION MONGODB')
    }
}

module.exports = {
    dbConnection
}