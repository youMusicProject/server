//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");
const config = require("./src/config/config");

const port = 4000;

// Config dotenv
dotenv.config();

// Conexion a la DB
connection().then(async function onServerInit () {
    config.logger.info('DB connected');


// Escuchar peticiones
    app.listen(config.app.PORT, () => {
    console.log("Estoy escuchando en el puerto " + process.env.PORT);
})

})