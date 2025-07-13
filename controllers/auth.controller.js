/* global process*/
const Usuario = require('../models/Usuarios.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
async function register(req, res) {
  try {
    const { Nombre, Apellido, Email, Contraseña, Rol } = req.body;
    const usuarioExistente = await Usuario.findOne({ Email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Contraseña, salt);

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario({
      Nombre,
      Apellido,
      Email,
      Contraseña: hashedPassword,
      Rol: Rol || 'Usuario',
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
// Login de usuario
async function login(req, res) {
  try {
    const { Email, Contraseña } = req.body;

    // 1. Buscar al usuario por su email
    const usuarioEncontrado = await Usuario.findOne({ Email });
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // 2. Comparar contraseñas con bcrypt
    const passwordValida = await bcrypt.compare(Contraseña, usuarioEncontrado.Contraseña);
    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // 3. Generar token JWT
    const token = jwt.sign(
      { id: usuarioEncontrado._id, Rol: usuarioEncontrado.Rol },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 4. Responder con datos del usuario y token
    res.status(200).json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        id: usuarioEncontrado._id,
        Nombre: usuarioEncontrado.Nombre,
        Email: usuarioEncontrado.Email,
        Rol: usuarioEncontrado.Rol,
      },
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


module.exports = { register, login };
