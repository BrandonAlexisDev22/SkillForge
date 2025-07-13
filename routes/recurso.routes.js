const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth.middleware.js');
const isAdmin = require('../middleware/isAdmin.middleware.js');
const {
  crearRecurso,
  obtenerRecursos,
  obtenerRecursoPorId,
  editarRecurso,
  eliminarRecurso,
} = require('../controllers/recurso.controller.js');


//GET
router.get('/',verificarToken,isAdmin,obtenerRecursos);
router.get('/:id', verificarToken,obtenerRecursoPorId);

//POST 
router.post('/', crearRecurso);

//PUT
router.put('/:id', verificarToken, editarRecurso);

//DELETE
router.delete('/:id', verificarToken,eliminarRecurso);

module.exports = router;