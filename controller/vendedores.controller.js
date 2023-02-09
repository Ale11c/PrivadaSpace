const Verdedores = require("../models/vendedores.model");   //Se llama al archivo modelo

async function createVendedores(req,res){       //Se crean clases
    const Vendedores = new vendedores(req,body);
    console.log(req.body);
}

async function updateVendedores(req,res){
    console.log("Actualización de vendedores")
}

async function deleteVendedor(req,res){
    console.log("Eliminar vendedor")
}

async function getVendedor(req,res){
    console.log("Obtener vendedor")
}

module.exports = {      //Se exportan las clases
    createVendedores,
    updateVendedores,
    deleteVendedor,
    getVendedor
}