import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al levantar la base de datos')
    }
};


// const mongoose = require('mongoose');

// const dbConnection = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_CNN);
//         console.log('Base de datos online')
//     } catch (error) {
//         console.log(error)
//         throw new Error('Error a la hora de inicializar la base de datos')
//     }
// }

// module.exports = {
//     dbConnection
// }
