const { Router } = require("express");
const getAllProducts= require("./productos");
const router = Router();

// Configurar los routers

router.use("/productos", getAllProducts);

module.exports = router;
