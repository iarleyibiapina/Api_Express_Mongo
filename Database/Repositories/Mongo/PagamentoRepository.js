// PagamentoRepository.js
const mongoose = require('mongoose');
const Pagamento = mongoose.model('Pagamento');

class PagamentoRepository {
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
      const pagamentos = await Pagamento.find().exec();
      return pagamentos;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(id, dados, { new: true });
      return pagamentoAtualizado;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      await Pagamento.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PagamentoRepository;
