const express = require("express");
const VendedoresController = require("../controller/vendedores.controller");

const api = express.Router();

api.post("/vendedor",VendedoresController.createVendedores);
api.get("./vendedor",VendedoresController.getVendedor);
api.delete("./vendedor/:id",VendedoresController.deleteVendedor); //Cuando se elimine un vendedor, retorna el ID
api.put("./vendedor",VendedoresController.updateVendedores);

module.exports = api;