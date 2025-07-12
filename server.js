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
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log('escuchando en el puerto ', port);
});
