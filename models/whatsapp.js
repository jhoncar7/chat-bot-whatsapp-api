const { Schema, model } = require('mongoose');

const WhatsappShema = Schema({

    data: { type: {} },

});

// enviar el objeto parcial, con los campos que unicamente quiero mostrar
WhatsappShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Whatsapp', WhatsappShema);
//Se le Pone Usuario moongose le agrega la 's' y lo crea en la base de datos


// email: { type: String, required: [true, 'El correo es obligatorio'], unique: true },

//     password: { type: String, required: [true, 'El contraseña es obligatoria'] },

//     image: { type: String, default: process.env.IMAGE_PROFILE },

//     status: { type: Boolean, default: true },

//     date_creation: { type: Date, default: Date.now },

//     date_delete: { type: Date, default: null },

//     phone: { type: String, default: '' },

//     sex: { type: String, default: 'Otro', enum: ['Masculino', 'Femenino', 'Otro'] },

//     km: { type: Number, default: 0 },

//     birthdate: { type: String, default: '' },

//     google: { type: Boolean, default: false },

//     facebook: { type: Boolean, default: false },

//     events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

//     events_confirmed: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

//     events_canceled: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

//     events_favorite: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

//     groups_owner: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

//     groups_admin: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

//     groups_following: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

//     groups_requests: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

//     groups_notification: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

//     level: {
//         type: Schema.Types.String,
//         ref: 'Level',
//         default: 'Principiante',
//         enum: ['Principiante', 'Intermedio', 'Avanzado']
//     },

//     interest: [{
//         type: Schema.Types.String,
//         ref: 'Objetive',
//         required: [true, 'El objetivo es obligatorio']
//     }],

//     reports: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Report',
//     }],

//     updates: {
//         type: Object,
//         default: {
//             'name': null,
//             'email': null
//         }
//     },

//     token_notification: { type: String },