const Usuario = require('../models/Usuarios.js');
async function obtenerUsuarios(req, res) {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

async function CrearUsuario(req, res) {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(200).json({ mensaje: 'Usuario creado correctamente' });
  } catch (e) {
    console.error('Error al crear usuario:', e.message);
    res.status(500).json({ error: e.message });
  }
}

async function editarInformacion(req, res) {
  try {
    const { id } = req.params;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(usuarioActualizado);
    return true; // RETORNO PARA EL FUTURO FRONTEND
  } catch (e) {
    res.status(500).json({ error: e });
    return false; // RETORNO PARA EL FUTURO FRONTEND
  }
}

async function obtenerUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuarioEncontrado = await Usuario.findById(id);
    res.status(200).json(usuarioEncontrado);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

// async function eliminarTodosUsuarios(req, res) {
//   try {
//     await Usuario.deleteMany({});
//     res.status(200).json({ mensaje: 'Usuarios eliminados correctamente' });
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// }

module.exports = {
  obtenerUsuarios,
  obtenerUsuario,
  CrearUsuario,
  editarInformacion,
  eliminarUsuario,
};
