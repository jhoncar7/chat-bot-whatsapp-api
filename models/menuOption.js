import { Schema, model } from 'mongoose';

const MenuOptionShema = new Schema({

    title: { type: String, required: [true, 'El Titulo del menú es obligatorio'] },
    description: { type: String, required: [true, 'La descripción del menú es obligatorio'] },
    status: { type: Boolean, default: true },
    date_creation: { type: Date, default: Date.now },
    date_delete: { type: Date, default: null },

});

MenuOptionShema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export default model('MenuOption', MenuOptionShema);