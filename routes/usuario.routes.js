const express = require('express');
const router = express.Router();
const Usuarios = require('../models/Usuarios.js');

//GET OBTENER TODOS LOS USUARIOS

router.get('/', async (req, res) => {
  try {
    const ObtenerUsuarios = await Usuarios.find();
    let listaUsuarios = res.json(ObtenerUsuarios);
    res.status(200).json(listaUsuarios);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuarios(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
