const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth.middleware.js');
const isAdmin = require('../middleware/isAdmin.middleware.js');
const {
  crearRuta,
  obtenerRutas,
  obtenerRutaPorId,
  editarRuta,
  eliminarRuta,
} = require('../controllers/ruta.controller.js');

//GET
router.get('/', verificarToken, isAdmin, obtenerRutas);
router.get('/:id', verificarToken, obtenerRutaPorId);

//POST
router.post('/', crearRuta);

//PUT
router.put('/:id', verificarToken, editarRuta);

//DELETE
router.delete('/:id', verificarToken, eliminarRuta);

module.exports = router;
