const { Schema, model } = require('mongoose');

const UsuarioShema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    numero: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    wa_id: { type: String, required: [true, 'El wa_id es obligatorio'], unique: true },
    status: { type: Boolean, default: true },
    codigos_activos: [{ type: Schema.Types.ObjectId, ref: 'Cupones' }],
    codigos_usados: [{ type: Schema.Types.ObjectId, ref: 'Cupones' }],
});


UsuarioShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Usuario', UsuarioShema);