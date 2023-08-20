const express = require('express');
const { process } = require('../shared/processMessage');
const { Usuario } = require('../models');
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
            console.log('Termina con error');
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
        const messageObject = value["messages"];

        if (messageObject) {
            const message = messageObject[0];
            const number = message["from"];
            const numberNormalizado = normalizeNumber(number);
            const name = value['contacts'][0]['profile']['name'];

            const usuario = await getUsuario(number);

            if (!usuario)
                crearUsuario(name, number)

            if (usuario.status) {
                const text = getTextUser(message);

                if (text != '')
                    process(text, numberNormalizado);
            }
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

const getUsuario = async (numero) => {

    try {
        const user = await Usuario.findOne({ numero });

        if (!user)
            return null;

        // if (!user.status) //verificar status
        //     return null;

        return user;

    } catch (error) {
        console.log(error);
        throw error
    }
}

const crearUsuario = async (nombre, numero) => {
    try {
        nombre = nombre.trim().toLocaleLowerCase();
        const user = new Usuario({ nombre, numero });
        if (user) {
            await user.save();
            return user;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { VerifyToken, ReceivedMessage };