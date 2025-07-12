'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SourceSchema = Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Tipo: {
        type: String,
        required: true,
    },

    Enlace: {
        type:String,
        required: true,
    },
    Ruta: {
        type: Schema.ObjectId,
        ref: 'Ruta'
    },
});

module.exports = mongoose.model('Recurso',SourceSchema);
