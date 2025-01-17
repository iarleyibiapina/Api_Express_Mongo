// ComissaoRepository.js
const mongoose = require('mongoose');
const AbstractRepository = require('../AbstractRepository');
const Comissao = mongoose.model('Comissao');

class ComissaoRepository extends AbstractRepository
{
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
      const comissoes = await Comissao.find().exec();
      return comissoes;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      const comissaoAtualizada = await Comissao.findByIdAndUpdate(id, dados, { new: true });
      return comissaoAtualizada;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      await Comissao.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ComissaoRepository;
