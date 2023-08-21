import { Schema, model } from 'mongoose';

const UsuarioShema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    numero: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    wa_id: { type: String, required: [true, 'El wa_id es obligatorio'], unique: true },
    status: { type: Boolean, default: true },
    codigos_activos: [{ type: String }],
    codigos_usados: [{ type: String }],
});


UsuarioShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export default model('Usuario', UsuarioShema);