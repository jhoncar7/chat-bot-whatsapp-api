const express = require('express');
const response = express.response;
const request = express.request;

const VerifyToken = (req = request, res = response) => {
    try {
        const accessToken = process.env.TOKEN_WHATSAPP;
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        if(!challenge && !token && token==challenge){
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    } catch (error) {
        res.status(400).send();
    }
};

const ReceivedMessage = (req = request, res = response) => {
    res.json({ msg: 'ReceivedMessage' })
};

module.exports = { VerifyToken, ReceivedMessage };