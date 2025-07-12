'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DiarySchema = Schema({
    Texto: {
        type: String,
        required: true,
    },
    Usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario',
    },
}, {timestaps: true});

module.exports = mongoose.model('Diario',DiarySchema);