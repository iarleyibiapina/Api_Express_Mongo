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
      const comissoes = await Comissao.find();
      return comissoes;
    } catch (error) {
      throw error;
    }
  }

  async encontrar(id) {
    const comissao = await Comissao.findById(id);
    if (!comissao) throw new NotFoundException('Comissão não encontrada');
    return comissao;
  }

  async atualizar(id, dados) {
    try {
      const comissaoAtualizada = await Comissao.findByIdAndUpdate(id, dados, { new: true });
      if (!comissao) throw new NotFoundException('Comissão não encontrada');
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
