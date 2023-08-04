const express = require('express');
const response = express.response;
const request = express.request;

const VerifyToken = (req = request, res = response) => {
    try {

        console.log('Entro');

        const accessToken = "jeza077.";
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];


        if(challenge != null && token != null && token == accessToken){
            console.log('Termina bien');
            res.send(challenge); 
        } else {
            console.log('ermina con error');
            res.status(400).send();
        }

    } catch(e){
        console.log('Termina con error');
        res.status(400).send();
    }
};

const ReceivedMessage = (req = request, res = response) => {
    res.json({ msg: 'ReceivedMessage' })
};

module.exports = { VerifyToken, ReceivedMessage };