const express = require('express');
const { sendMessageWhatsapp } = require('../services/whatsappService');
const response = express.response;
const request = express.request;

const VerifyToken = (req = request, res = response) => {
    try {

        console.log('Entro');

        const accessToken = process.env.TOKEN_WHATSAPP;
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];


        if (challenge != null && token != null && token == accessToken) {
            console.log('Termina bien');
            res.send(challenge);
        } else {
            console.log('ermina con error');
            res.status(400).send();
        }

    } catch (e) {
        console.log('Termina con error');
        res.status(400).send();
    }
};


const ReceivedMessage = async (req = request, res = response) => {
    try {

        const entry = req.body["entry"][0];
        const changes = entry["changes"][0];
        const value = changes["value"];

        const name = value['contacts'][0]['profile']['name'];
        let number = value['contacts'][0]['wa_id'];
        number = normalizeNumber(number);

        const messageObject = value["messages"];

        if (messageObject) {
            console.log('messageObject: ', messageObject);
            const text = getTextUser(messageObject[0]);

            console.log({ text });

            sendMessageWhatsapp(`Hola ${name}, en que puedo ayudarte?`, number);
            // sendMessageWhatsapp(`El usuario dijo: ${text}`, number);
        }

        res.send("EVENT_RECEIVED");
    } catch (error) {
        console.log('error ReceivedMessage: ', error);
        res.send("EVENT_RECEIVED");
    }
};

const getTextUser = (message) => {

    let text = '';
    const typeMessage = message['type'];

    if (typeMessage == 'text')
        text = message['text']['body'];

    else if (typeMessage == 'interactive') {

        const interactiveObject = message['interactive']
        const typeInteractive = interactiveObject['type'];

        console.log('interactiveObject: ', interactiveObject);

        if (typeInteractive == 'button_reply')
            text = interactiveObject['button_reply']['title'];

        else if (typeInteractive == 'list_reply')
            text = interactiveObject['list_reply']['title'];

        else
            console.log('Sin mensaje en INTERACTIVE');

    } else
        console.log('Sin mensaje en TEXT');

    return text;

}

const normalizeNumber = (number) => {
    return number.startsWith('549') ? '54' + number.substring(3) : number;
};

module.exports = { VerifyToken, ReceivedMessage };