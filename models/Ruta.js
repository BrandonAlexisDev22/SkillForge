'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RouteSchema = new Schema(
  {
    Titulo: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Recursos: [
      {
        type: Schema.ObjectId,
        ref: 'Recurso',
      },
    ],
    Usuario: {
      type: Schema.ObjectId,
      ref: 'Usuario',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ruta', RouteSchema,'rutasaprendizajes');
