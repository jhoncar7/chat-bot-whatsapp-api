
const sampleText = (textResponse, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        },
    });
};

const sampleImage = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": link
        },
    });
};

const sampleAudio = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": link
        },
    });
};

const sampleVideo = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": link
        },
    });
};

const sampleDocument = (link, number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": link
        },
    });
};

const sampleButtons = (number) => {
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

const sampleLocation = (number) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "-34.54576577714616",
            "longitude": "-58.449612546022536",
            "name": "River Plate- el mejor estadio del mundo",
            "address": "Av. Pres. Figueroa Alcorta 7597, C1428 CABA"
        }
    });
};

const sampleList = (link, number) => {
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
                        "title": "<LIST_SECTION_1_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_1_ROW_1_ID>",
                                "title": "<SECTION_1_ROW_1_TITLE>",
                                "description": "<SECTION_1_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_1_ROW_2_ID>",
                                "title": "<SECTION_1_ROW_2_TITLE>",
                                "description": "<SECTION_1_ROW_2_DESC>"
                            }
                        ]
                    },
                    {
                        "title": "<LIST_SECTION_2_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_2_ROW_1_ID>",
                                "title": "<SECTION_2_ROW_1_TITLE>",
                                "description": "<SECTION_2_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_2_ROW_2_ID>",
                                "title": "<SECTION_2_ROW_2_TITLE>",
                                "description": "<SECTION_2_ROW_2_DESC>"
                            }
                        ]
                    }
                ]
            }
        }
    });
};

module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleLocation,
    sampleList
}