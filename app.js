const express = require("express");         //Se "importan" las librerias
const cors = require("cors");
const bodyParser = require("bodyParser");


const app = express();          //Se agrega la libreria a una variable para usarla

//Importaciones de las rutas
const VendedoresRoutes = require("./routes/vendedores.route");
const { API_VERSION } = require("./constant");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());


//Configuraciones de las rutas
app.use(`/api/${API_VERSION}`,VendedoresRoutes);


module.exports=app;         //Se exporta el archivo