// ComissaoRepository.js
const mongoose = require('mongoose');
const AbstractRepository = require('../AbstractRepository');
const Comissao = require('../../Models/Comissao');

class ComissaoRepository extends AbstractRepository
{
  _objectIdRegex = /^[a-f\d]{24}$/i; // regex para id

  async criar(comissao) {
    try {
      const novaComissao = new Comissao(comissao);
      await novaComissao.save();
      return novaComissao;
    } catch (error) {
      throw error;
    }
  }

  async listar() {
    try {
      const comissoes = await Comissao.find();
      return comissoes;
    } catch (error) {
      throw error;
    }
  }

  async encontrar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const comissao = await Comissao.findById(id);
      if (!comissao) throw new Error('Comissão não encontrada');
      return comissao;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const comissao = await Comissao.findByIdAndUpdate(id, dados, { new: true });
      if (!comissao) throw new Error('Comissão não encontrada');
      return comissao;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      await Comissao.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ComissaoRepository();
