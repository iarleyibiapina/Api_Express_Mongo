const express = require("express");
const router = express.Router();
const FiliadoController = require("../../Http/Controllers/v1/FiliadoController");

// ordem do :id importa
router
 .get("/filiados", FiliadoController.get)
 .post("/filiado", FiliadoController.store)
 .patch("/filiado/:id/clique", FiliadoController.clicado)
 .get("/filiado/:id", FiliadoController.find)
 .put("/filiado/:id", FiliadoController.update)
 .delete("/filiado/:id", FiliadoController.delete);

module.exports = router;
