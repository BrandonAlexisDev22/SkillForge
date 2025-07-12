'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Apellido: {
        type: String,
        required: true,
    },

    Email: {
        type:String,
        required: true,
    },

    Rol: {
        type: String,
        enum: ["Usuario", "Administrados"],
        default: "Usuario",
    },

    Contraseña: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Usuario',UserSchema);