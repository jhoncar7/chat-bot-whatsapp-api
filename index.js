const express = require('express');
require('dotenv').config()
const apiRouter = require('./routes/routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api-whatsapp', apiRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});