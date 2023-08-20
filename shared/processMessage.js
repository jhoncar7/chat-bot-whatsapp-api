const { sendMessageWhatsapp } = require("../services/whatsappService");
const { messageText, messageList, messageLocation } = require("./whatsappModels");

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    const models = [];

    if (textUser.includes("hola")) {
        const model = messageText("Hola, un gusto saludarte. 👋", number);
        // const modelList = messageList(number);
        models.push(model);
        // models.push(modelList);
    }
    else if (textUser.includes("gracias")) {
        const model = messageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);
    }
    else if (textUser.includes("menu")) {
        const model = messageList(number);
        console.log({ model });
        models.push(model);
    }
    else if (textUser.includes("adios") ||
        textUser.includes("adiós") ||
        textUser.includes("bye") ||
        textUser.includes("me voy")
    ) {
        const model = messageText("Ve con cuidado. 😊", number);
        models.push(model);
    }
    else if (textUser.includes("comprar")) {
        // const model = MessageComprar(number);
        // models.push(model);

    }
    else if (textUser.includes("vender")) {
        // const model = messageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
        // models.push(model);
    }
    else if (textUser.includes("agencia")) {
        // const model = messageText("Aquí tienes nuestra dirección. 😊", number);
        // models.push(model);
        // const modelLocation = messageLocation(number);
        // models.push(modelLocation);

    }
    else if (textUser.includes("contacto")) {
        // const model = messageText("📞*Centro de contacto:*\n912345678", number);
        // models.push(model);

    }
    else {
        const model = messageText("No entiendo lo que dices, elije algunas de estas opciones: ", number);
        models.push(model);
    }

    models.forEach(model => {
        sendMessageWhatsapp(model);
    });
}

module.exports = {
    process
};