const Filiado = require('../../../Database/Models/Filiado.js');
const FiliadoDTO = require('../../DTOs/FiliadoDTO.js');
const NotFoundException = require('../../Exceptions/NotFoundException.js');

// FALTA o service

class FiliadoController {
  async store(req, res, next) {
    try {
      const filiado = new Filiado(new FiliadoDTO({
        nome_filiado: req.body.nome_filiado,
        meta: req.body.meta,
        url: req.body.url,
        comissao_por_clic: req.body.comissao_por_clic,
      }).toObject());
      const savedFiliado = await filiado.save();
      return res.status(201).json(savedFiliado);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const filiados = await Filiado.find();
      return res.json(filiados);
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const id = req.params.id;
      const filiado = await Filiado.findById(id);
      if (!filiado) throw new NotFoundException('Filiado não encontrado');
      const objectFiliado = filiado.toObject();
      const filiadoDTO = new FiliadoDTO({
        nome_filiado: objectFiliado.nome_filiado,
        meta: objectFiliado.meta,
        url: objectFiliado.url,
        comissao_por_clic: objectFiliado.comissao_por_clic,
      });
      return res.json(filiadoDTO.toObject());
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const filiado = await Filiado.findByIdAndUpdate(id, req.body, { new: true });
      if (!filiado) throw new NotFoundException('Filiado não encontrado');
      return res.json(filiado);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await Filiado.findByIdAndDelete(id);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FiliadoController();
