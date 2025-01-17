const Comissao = require('../../../Database/Models/Comissao.js');
const ComissaoDTO = require('../../DTOs/ComissaoDTO.js');
const NotFoundException = require('../../Exceptions/NotFoundException.js');

class ComissaoController {
  async store(req, res, next) {
    try {
      const comissao = new Comissao(new ComissaoDTO({
        filiado_id: req.body.filiado_id,
        valor_comissao: req.body.valor_comissao,
        descricao: req.body.descricao,
      }).toObject());
      const savedComissao = await comissao.save();
      return res.status(201).json(savedComissao);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const comissoes = await Comissao.find();
      return res.json(comissoes);
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const id = req.params.id;
      const comissao = await Comissao.findById(id);
      if (!comissao) throw new NotFoundException('Comissão não encontrada');
      const objectComissao = comissao.toObject();
      const comissaoDTO = new ComissaoDTO({
        filiado_id: objectComissao.filiado_id,
        valor_comissao: objectComissao.valor_comissao,
        descricao: objectComissao.descricao,
      });
      return res.json(comissaoDTO.toObject());
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const comissao = await Comissao.findByIdAndUpdate(id, req.body, { new: true });
      if (!comissao) throw new NotFoundException('Comissão não encontrada');
      return res.json(comissao);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await Comissao.findByIdAndDelete(id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ComissaoController();
