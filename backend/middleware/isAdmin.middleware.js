// middleware/isAdmin.js
module.exports = (req, res, next) => {
  if (req.usuario && req.usuario.Rol === 'Administrador') {
    return next();
  }
  return res.status(403).json({ mensaje: 'Acceso denegado: solo administradores' });
};
