import { Schema, model } from 'mongoose';

const CuponesShema = new Schema({
    codigo: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    status: { type: Boolean, default: true },
    asignado: { type: Boolean, default: false },
    usuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
});


CuponesShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export default model('Cupones', CuponesShema);