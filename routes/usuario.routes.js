const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth.middleware.js');
const isAdmin = require('../middleware/isAdmin.middleware.js');
const {
  obtenerUsuarios,
  obtenerUsuario,
  CrearUsuario,
  editarInformacion,
  eliminarUsuario,
} = require('../controllers/usuario.controller.js');

//GET
router.get('/',verificarToken,isAdmin,obtenerUsuarios); // FUNCIONA
router.get('/:id', verificarToken,obtenerUsuario); // FUNCIONA

//POST
router.post('/',CrearUsuario); // FUNCIONA

//PUT
router.put('/:id', verificarToken,editarInformacion); // FUNCIONA

//DELETE
router.delete('/:id', verificarToken,eliminarUsuario); // FUNCIONA

// router.delete('/', eliminarTodosUsuarios);

module.exports = router;
