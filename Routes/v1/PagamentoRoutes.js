const express = require("express");
const router = express.Router();
const PagamentoController = require("../../Http/Controllers/v1/PagamentoController");

// ordem do :id importa
router
 .get("/pagamentos", PagamentoController.get)
 .post("/pagamento", PagamentoController.store)
 .get("/pagamento/:id", PagamentoController.find)
 .put("/pagamento/:id", PagamentoController.update)
 .delete("/pagamento/:id", PagamentoController.delete);

module.exports = router;
