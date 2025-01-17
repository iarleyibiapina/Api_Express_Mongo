const Pagamento = require('../../../Database/Models/Pagamento.js');
const PagamentoDTO = require('../../DTOs/PagamentoDTO.js');
const NotFoundException = require('../../Exceptions/NotFoundException.js');

class PagamentoController {
  async store(req, res, next) {
    try {
      const pagamento = new Pagamento(new PagamentoDTO({
        filiado_id: req.body.filiado_id,
        valor_pagamento: req.body.valor_pagamento,
        status: req.body.status,
      }).toObject());
      const savedPagamento = await pagamento.save();
      return res.status(201).json(savedPagamento);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const pagamentos = await Pagamento.find();
      return res.json(pagamentos);
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const id = req.params.id;
      const pagamento = await Pagamento.findById(id);
      if (!pagamento) throw new NotFoundException('Pagamento não encontrado');
      const objectPagamento = pagamento.toObject();
      const pagamentoDTO = new PagamentoDTO({
        filiado_id: objectPagamento.filiado_id,
        valor_pagamento: objectPagamento.valor_pagamento,
        status: objectPagamento.status,
      });
      return res.json(pagamentoDTO.toObject());
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const pagamento = await Pagamento.findByIdAndUpdate(id, req.body, { new: true });
      if (!pagamento) throw new NotFoundException('Pagamento não encontrado');
      return res.json(pagamento);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await Pagamento.findByIdAndDelete(id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PagamentoController();
