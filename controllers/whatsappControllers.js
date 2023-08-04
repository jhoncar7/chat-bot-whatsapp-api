const express = require('express');
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

const ReceivedMessage = (req = request, res = response) => {
    try {
        const entry = req.body["entry"][0];
        const changes = entry["changes"][0];
        const value = changes["value"];
        const messageObject = value["messages"];
        console.log(messageObject);
        res.send("EVENT_RECEIVED");
    } catch (error) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
};

module.exports = { VerifyToken, ReceivedMessage };