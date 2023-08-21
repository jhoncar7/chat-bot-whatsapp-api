// const https = require('https');

// const sendMessageWhatsapp = (data) => {

//     const options = {
//         host: "graph.facebook.com",
//         path: `/v17.0/${process.env.ID_PHONE}/messages`,
//         method: "POST",
//         body: data,
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.TOKEN}`
//         },
//     };

//     const req = https.request(options, res => {
//         res.on("data", d => {
//             process.stdout.write(d);
//         });
//     });

//     req.on("error", error => {
//         console.error("error: ", error);
//     });

//     req.write(data);
//     req.end();

// };


// const axios = require('axios');
import axios from 'axios';

export const sendMessageWhatsapp = async (data) => {
    try {

        const response = await axios.post(`https://graph.facebook.com/v17.0/${process.env.ID_PHONE}/messages`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        });

        // console.log('Response:', response.data);
    } catch (error) {
        console.error('Error sendMessageWhatsapp:', error);
    }
};

// module.exports = {
//     sendMessageWhatsapp
// }