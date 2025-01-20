// PagamentoRepository.js
const mongoose = require('mongoose');
const Pagamento = require('../../Models/Pagamento');
const AbstractRepository = require('../AbstractRepository');

class PagamentoRepository extends AbstractRepository 
{
  _objectIdRegex = /^[a-f\d]{24}$/i; // regex para id

  async criar(pagamento) {
    try {
      const novoPagamento = new Pagamento(pagamento);
      await novoPagamento.save();
      return novoPagamento;
    } catch (error) {
      throw error;
    }
  }

  async listar() {
    try {
      const pagamentos = await Pagamento.find();
      return pagamentos;
    } catch (error) {
      throw error;
    }
  }

  async encontrar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const pagamento = await Pagamento.findById(id);
      if (!pagamento) throw new NotFoundException('pagamento não encontrado');
      return pagamento;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(id, dados, { new: true });
      return pagamentoAtualizado;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      await Pagamento.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PagamentoRepository();
