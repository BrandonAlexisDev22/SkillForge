/* global process*/
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
dotenv.config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const usuarioRoutes = require('./routes/usuario.routes.js');
const routes = require('./routes/ruta.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const recursos = require('./routes/recurso.routes.js');
const diarios = require('./routes/diario.routes.js');
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutas', routes);
app.use('/api/recursos', recursos);
app.use('/api/diarios', diarios)
app.use('/auth', authRoutes);
app.listen(port, () => {
  console.log('escuchando en el puerto ', port);
});
