'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RouteSchema = Schema({
    Titulo: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true,
    },

    Recurso: {
        type:Schema.ObjectId,
        ref: 'Recurso',
    },

    Usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario'
    },
}, {timestaps: true});

module.exports = mongoose.model('Ruta',RouteSchema);