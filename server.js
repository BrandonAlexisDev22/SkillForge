const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.listen(port, () => {
    console.log('escuchando en el puerto ', port);
});


app.get('/',(req,res) => {
    res.end('Inicializando servidor');
});