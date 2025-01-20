const PagamentoService = require('../../Services/PagamentoService.js');

class PagamentoController {
  async store(req, res, next) {
    try {
      const pagamento = await PagamentoService.criar(req.body);
      return res.status(201).json(pagamento);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      return res.json(await PagamentoService.listar());
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      return res.json(await PagamentoService.encontrar(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      return res.json(await PagamentoService.atualizar(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await PagamentoService.deletar(req.params.id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PagamentoController();
