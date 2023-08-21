import { MenuOption } from '../models/index.js'
// const { MenuOption } = require("../models");

export const messageText = (textResponse, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        },
    });
};

export const messageImage = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": link
        },
    });
};

export const messageAudio = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": link
        },
    });
};

export const messageVideo = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": link
        },
    });
};

export const messageDocument = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": link,
            "caption": "Productos",
            "filename": "Productos de construcción"
        },
    });
};

export const messageButtons = (number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Are you hungry?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "unique-id-123",
                            "title": "Yes"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "unique-id-456",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });
};

export const messageLocation = (number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "-34.54576577714616",
            "longitude": "-58.449612546022536",
            "name": "River Plate - el mejor estadio del mundo",
            "address": "Av. Pres. Figueroa Alcorta 7597, C1428 CABA"
        }
    });
};

export const messageList = async (number) => {

    const options = await MenuOption.find();

    const rows = options.map(option => ({
        id: option._id,
        title: option.title
    }));

    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Venta de Productos al por mayor"
            },
            "body": {
                "text": "Para brindarte ayuda selecciona una opción"
            },
            "footer": {
                "text": "Siempre a tu servicio"
            },
            "action": {
                "button": "Opciones",
                "sections": [
                    {
                        "title": "Elije una opción",
                        "rows": rows
                    },
                ]
            }
        }
    });
};

// module.exports = {
//     messageText,
//     messageImage,
//     messageAudio,
//     messageVideo,
//     messageDocument,
//     messageButtons,
//     messageLocation,
//     messageList
// }