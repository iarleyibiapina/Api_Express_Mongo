const express = require("express");
const router = express.Router();
const ComissaoController = require("../../Http/Controllers/v1/ComissaoController");

// ordem do :id importa
router
 .get("/comissoes", ComissaoController.get)
 .post("/comissao", ComissaoController.store)
 .get("/comissao/:id", ComissaoController.find)
 .put("/comissao/:id", ComissaoController.update)
 .delete("/comissao/:id", ComissaoController.delete);

module.exports = router;
