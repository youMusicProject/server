//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");


// Config dotenv
dotenv.config();
// Conexion a la DB
connection();


const port = process.env.PORT;


// Escuchar peticiones
app.listen(4000, () => {
    console.log("Estoy escuchando en el puerto " + port);
})