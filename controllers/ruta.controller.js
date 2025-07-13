const Ruta = require('../models/ruta');

// Crear
exports.crearRuta = async (req, res) => {
  try {
    const ruta = new Ruta(req.body);
    await ruta.save();
    res.status(201).json(ruta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Leer todas
exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await Ruta.find();
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leer una
exports.obtenerRutaPorId = async (req, res) => {
  try {
    const ruta = await Ruta.findById(req.params.id);
    if (!ruta) return res.status(404).json({ error: 'Ruta no encontrada' });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarRuta = async (req, res) => {
  try {
    const ruta = await Ruta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ruta) return res.status(404).json({ error: 'Ruta no encontrada' });
    res.json(ruta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarRuta = async (req, res) => {
  try {
    const ruta = await Ruta.findByIdAndDelete(req.params.id);
    if (!ruta) return res.status(404).json({ error: 'Ruta no encontrada' });
    res.json({ message: 'Ruta eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
