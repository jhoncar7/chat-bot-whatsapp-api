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