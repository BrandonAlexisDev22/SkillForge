const Recurso = require('../models/recurso');

// Crear
exports.crearRecurso = async (req, res) => {
  try {
    const recurso = new Recurso(req.body);
    await recurso.save();
    res.status(201).json(recurso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Leer todos
exports.obtenerRecursos = async (req, res) => {
  try {
    const recursos = await Recurso.find();
    res.json(recursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leer uno
exports.obtenerRecursoPorId = async (req, res) => {
  try {
    const recurso = await Recurso.findById(req.params.id);
    if (!recurso) return res.status(404).json({ error: 'Recurso no encontrado' });
    res.json(recurso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.editarRecurso = async (req, res) => {
  try {
    const recurso = await Recurso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recurso) return res.status(404).json({ error: 'Recurso no encontrado' });
    res.json(recurso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarRecurso = async (req, res) => {
  try {
    const recurso = await Recurso.findByIdAndDelete(req.params.id);
    if (!recurso) return res.status(404).json({ error: 'Recurso no encontrado' });
    res.json({ message: 'Recurso eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}