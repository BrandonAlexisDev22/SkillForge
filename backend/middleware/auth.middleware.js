// middlewares/authMiddleware.js
/*global process*/

const jwt = require('jsonwebtoken');
function verificarToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const verificado = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = verificado;
    next();
  } catch (error) {
    res.status(401).json({ mensaje: error });
  }
}

module.exports = verificarToken;
