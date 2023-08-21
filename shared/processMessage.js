const { Whatsapp } = require("../models");
const { sendMessageWhatsapp } = require("../services/whatsappService");
const { messageText, messageList } = require("./whatsappModels");

const processText = async (textUser, number) => {
    textUser = textUser.toLowerCase();
    const models = [];

    if (textUser.includes("hola")) {
        const model = messageText("Hola, un gusto saludarte. 👋", number);
        const modelList = messageList(number);
        models.push(model);
        models.push(modelList);
    }
    else if (textUser.includes("gracias")) {
        const model = messageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);
    }
    else if (textUser.includes("menu")) {
        const model = await messageList(number);
        console.log({ model });
        models.push(model);
    }
    else if (textUser.includes("adios") ||
        textUser.includes("adiós") ||
        textUser.includes("bye") ||
        textUser.includes("me voy")
    ) {
        const model = messageText("Hasta pronto. 😊", number);
        models.push(model);
    }
    else if (textUser.includes("contacto")) {
        const model = messageText("Información de contacto. 😊", number);
        models.push(model);
    }
    else if (textUser.includes("productos")) {
        // const model = messageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
        // models.push(model);
        const model = messageText("Productos 😊", number);
        models.push(model);
    }
    else if (textUser.includes("ubicación")) {
        // const model = messageText("Aquí tienes nuestra dirección. 😊", number);
        // models.push(model);
        // const modelLocation = messageLocation(number);
        // models.push(modelLocation);
        const model = messageText("ubicación 😊", number);
        models.push(model);

    }
    else if (textUser.includes("codigos")) {
        // const model = messageText("📞*Centro de contacto:*\n912345678", number);
        // models.push(model);
        const model = messageText("Codigos 😊", number);
        models.push(model);
    }
    else {
        const model = messageText("No entiendo lo que dices, elije algunas de estas opciones: ", number);
        const modelList = messageList(number);
        models.push(model);
        models.push(modelList);
    }

    models.forEach(model => {
        sendMessageWhatsapp(model);
    });
}

module.exports = {
    processText
};