const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//se crea como esquema
const Valor = new Schema({
    nombre_libro: {
        type: String,
        required: true,
        unique: true,
    },
    nombre_autor: String,
    genero: String,
    editorial: String,

    done: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
        versionKey: false,
    });
//se exporta como modelo
module.exports = mongoose.model('libros', Valor);