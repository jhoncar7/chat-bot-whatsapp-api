import { Schema, model } from 'mongoose';


const WhatsappShema = new Schema({

    data: { type: {} },

});

WhatsappShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export default model('Whatsapp', WhatsappShema);