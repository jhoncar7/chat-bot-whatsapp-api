const express = require('express');
require('dotenv').config()
const apiRouter = require('./routes/routes');
const { dbConnection } = require('./database/config');
const { Cupones } = require('./models');
// const { messageList } = require('./shared/whatsappModels');
// const { MenuOption, Cupones } = require('./models');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api-whatsapp', apiRouter);

const llamadoBase = async () => {
    await dbConnection();
}

const iniciarServidor = async () => {
    await llamadoBase();

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });

    // await messageList('1234')
    // const opt = new MenuOption(
    //     {
    //         title: 'Codigos promocionales',
    //         description: 'Codigos promocionales de descuento para nuestros clientes'
    //     }
    // )

    // await opt.save()

    // for (let i = 0; i < 20; i++) {
    //     const codigo = new Cupones({ codigo: generateRandomCode(6) })
    //     await codigo.save()
    // }
};

iniciarServidor();


function generateRandomCode(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}

const code = generateRandomCode(6);
