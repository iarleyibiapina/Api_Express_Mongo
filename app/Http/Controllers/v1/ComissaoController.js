const Comissao = require('../../../Database/Models/Comissao.js');
const ComissaoDTO = require('../../DTOs/ComissaoDTO.js');
const NotFoundException = require('../../Exceptions/NotFoundException.js');
const ComissaoService = require('../../Services/ComissaoService.js');

class ComissaoController {

  constructor()
  { 
    this.ComissaoService = new ComissaoService();
  }

  async store(req, res, next) {
    try {
      return res.status(201).json(await this.ComissaoService.criar(req.body));
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      return res.json(await this.ComissaoService.listar());
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      return res.json(this.ComissaoService.encontrar(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      return res.json(await this.ComissaoService.atualizar(req.params.id, req.params.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await this.ComissaoService.deletar(req.params.id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ComissaoController();
