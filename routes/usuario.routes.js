const express = require('express');
const router = express.Router();
const {
  obtenerUsuarios,
  obtenerUsuario,
  CrearUsuario,
  editarInformacion,
  eliminarUsuario,
} = require('../controllers/usuario.controller.js');

//GET
router.get('/', obtenerUsuarios); // FUNCIONA
router.get('/:id', obtenerUsuario);// FUNCIONA

//POST
router.post('/', CrearUsuario); // FUNCIONA

//PUT
router.put('/:id', editarInformacion); // FUNCIONA

//DELETE
router.delete('/:id', eliminarUsuario); // FUNCIONA

// router.delete('/', eliminarTodosUsuarios);

module.exports = router;
