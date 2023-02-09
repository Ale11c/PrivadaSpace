const mongose = require("mongose");



const{
    DB_NAME,        //Se importan las variables creadas en el archivo constants.js
    API_VERSION,
    DB_PORT,
    IP_SERVER
} = require("./constant");

const app = require("./app"); //Se importa el archivo app.js

const port = process.env.PORT || 4000; //Si no existe ningun servidor en linea, crea uno

mongose.set("stricQuery",false);
mongose.connect(`mongodb://${IP_SERVER}:${DB_PORT}:${DB_NAME}`); //aqui agrega la ip, el puerto y el nombre de la BD desde el archivo constants.js

if(error) throw error; //Verificar si existe algun error

app.listen(port, ()=>{
    console.log("API REST DE LA APP FUNCIONANDO");
    console.log("------------------------------");
    console.log(`http://${IP_SERVER},${port}/api/${API_VERSION}`,error);

})