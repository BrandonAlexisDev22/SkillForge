const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth.middleware.js');
const isAdmin = require('../middleware/isAdmin.middleware.js');
const {
  crearDiario,
  obtenerDiarios,
  obtenerDiarioPorId,
  editarDiario,
  eliminarDiario,
} = require('../controllers/diario.controller.js');


//GET
router.get('/',verificarToken,isAdmin,obtenerDiarios);
router.get('/:id', verificarToken,obtenerDiarioPorId);

//POST 
router.post('/', crearDiario);

//PUT
router.put('/:id', verificarToken, editarDiario);

//DELETE
router.delete('/:id', verificarToken,eliminarDiario);

module.exports = router;