const { Schema, model } = require('mongoose');

const UsuarioShema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    numero: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    estado: { type: Boolean, default: true },
});


UsuarioShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Usuario', UsuarioShema);