const ComissaoService = require('../../Services/ComissaoService.js');

class ComissaoController {

  async store(req, res, next) {
    try {
      return res.status(201).json(await ComissaoService.criar(req.body));
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      return res.json(await ComissaoService.listar());
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      return res.json(await ComissaoService.encontrar(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      return res.json(await ComissaoService.atualizar(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await ComissaoService.deletar(req.params.id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ComissaoController();
