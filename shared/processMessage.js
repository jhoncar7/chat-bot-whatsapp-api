const { Usuario, Cupones } = require("../models");
const { sendMessageWhatsapp } = require("../services/whatsappService");
const { messageText, messageList, messageLocation, messageDocument } = require("./whatsappModels");

const processText = async (textUser, number) => {
    textUser = textUser.toLowerCase();
    const models = [];

    if (textUser.includes("hola")) {
        const model = messageText("Hola, un gusto saludarte. 👋, en que podemos ayudarte?", number);
        const modelList = await messageList(number);
        models.push(model);
        models.push(modelList);
    }
    else if (textUser.includes("gracias")) {
        const model = messageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);
    }
    else if (textUser.includes("menu")) {
        const model = await messageList(number);
        models.push(model);
    }
    else if (textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("me voy")) {
        const model = messageText("Hasta pronto. 😊", number);
        models.push(model);
    }
    else if (textUser.includes("contacto")) {
        const model = messageText("*Información de contacto:*\nTelefono: 912345678 \nEmail: Tunegocio@email.com", number);
        models.push(model);
    }
    else if (textUser.includes("productos")) {
        const model = messageDocument(process.env.PRODUCTOS, number);
        models.push(model);
    }
    else if (textUser.includes("ubicación")) {
        const model = messageText("Aquí tienes nuestra dirección. esperamos que nos visite pronto 😊", number);
        const modelLocation = messageLocation(number);
        models.push(model);
        models.push(modelLocation);

    }
    else if (textUser.includes("codigos")) {

        const usuario = await Usuario.findOne({ numero: number });

        if (usuario) {
            if (usuario.codigos_activos.length > 0) {
                const model = messageText(`Ya tenes un codigo activo que aun no has usado \nCodigo activo: *${usuario.codigos_activos[0].toString().toUpperCase()}*`, number);
                models.push(model);
            } else {
                const codigo = await Cupones.findOne({ status: true, asignado: false });

                if (codigo) {
                    codigo.asignado = true;
                    codigo.usuario.push(usuario._id);

                    usuario.codigos_activos.push(codigo.codigo);

                    await Promise.all([codigo.save(), usuario.save()])
                    // await codigo.save();
                    // await usuario.save();

                    const model = messageText(`Tu codigo promocional es \nCodigo promocional: *${codigo.codigo}*`, number);
                    models.push(model);
                }
            }
        }
    }
    else {
        const model = messageText("No entiendo lo que dices, elije algunas de estas opciones: ", number);
        const modelList = await messageList(number);
        models.push(model);
        models.push(modelList);
    }

    // for (let i = 0; i < models.length; i++) {
    //     await sendMessageWhatsapp(models[i]);
    // }

    models.forEach(model => {
        sendMessageWhatsapp(model);
    });
}

module.exports = {
    processText
};