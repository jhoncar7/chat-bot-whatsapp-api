const https = require('https');

const sendMessageWhatsapp = (textResponse, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });

    const options = {
        host: "graph.facebook.com",
        path: `v17.0/${process.env.ID_PHONE}/messages`,
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TOKEN}`
        },
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            console.log("data: ", d);
        });
    });

    req.on("error", error => {
        console.error("error: ", error);
    });

    req.write(data);
    req.end();

};

module.exports = {
    sendMessageWhatsapp
}