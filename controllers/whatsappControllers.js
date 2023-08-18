const express = require('express');
const { sendMessageWhatsapp } = require('../services/whatsappService');
const { Whatsapp } = require('../models');
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

// const test = async (msg) => {
//     data = { 'test': '1', data: msg }
// const result = new Whatsapp({ data });
// await result.save();
// }

const ReceivedMessage = async (req = request, res = response) => {
    try {

        // console.log('req.body: ', req.body);
        // console.log('Entry: ', req.body["entry"]); //guardarlo y luego ver el documento json
        const d = req.body;
        console.log(d);
        console.log(typeof(d));
        const result = new Whatsapp(d);
        await result.save();

        const entry = req.body["entry"][0];
        const changes = entry["changes"][0];
        // const name = changes['value']['contacts']['profile']['name'];
        const number = changes['value']['contacts']['wa_id'];
        const value = changes["value"];

        const messageObject = value["messages"];

        if (messageObject) {
            console.log('messageObject: ', messageObject);
            const text = getTextUser(messageObject[0]);
            // sendMessageWhatsapp(`Hola ${name}, en que puedo ayudarte?`, number);
            sendMessageWhatsapp(`El usuario dijo: ${text}`, number);
        }

        res.send("EVENT_RECEIVED");
    } catch (error) {
        console.log(error);
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

module.exports = { VerifyToken, ReceivedMessage };