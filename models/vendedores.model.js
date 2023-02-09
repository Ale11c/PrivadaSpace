const mongose = require("mongose");


const Verdedores = mongose.Schema({
    ID_VENDEDOR: {
        type: String,
        unique: true
    },
    NOMBRE: String,
    APELLIDO: String,
    DIRECCION: String,
    TELEFONO: {
        type: Number,
        unique: true,
    },
    EMAIL: String,
    CREATED_AT: Date.now()
})

module.exports = mongose.model("Vendedor", Vendedor);