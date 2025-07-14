const Diario = require('../models/Diario.js');

// Crear
exports.crearDiario = async (req, res) => {
  try {
    const diario = new Diario(req.body);
    await diario.save();
    res.status(201).json(diario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Leer todos
exports.obtenerDiarios = async (req, res) => {
  try {
    const diarios = await Diario.find();
    res.json(diarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leer uno
exports.obtenerDiarioPorId = async (req, res) => {
  try {
    const diario = await Diario.findById(req.params.id);
    if (!diario) return res.status(404).json({ error: 'Diario no encontrado' });
    res.json(diario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.editarDiario = async (req, res) => {
  try {
    const diario = await Diario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!diario) return res.status(404).json({ error: 'Diario no encontrado' });
    res.json(diario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarDiario = async (req, res) => {
  try {
    const diario = await Diario.findByIdAndDelete(req.params.id);
    if (!diario) return res.status(404).json({ error: 'Diario no encontrado' });
    res.json({ message: 'Diario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
