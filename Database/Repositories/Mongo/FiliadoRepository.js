// FiliadoRepository.js
const mongoose = require('mongoose');
const Filiado = mongoose.model('Filiado');

class FiliadoRepository {
  async criar(filiado) {
    try {
      const novoFiliado = new Filiado(filiado);
      await novoFiliado.save();
      return novoFiliado;
    } catch (error) {
      throw error;
    }
  }

  async listar() {
    try {
      const filiados = await Filiado.find().exec();
      return filiados;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      const filiadoAtualizado = await Filiado.findByIdAndUpdate(id, dados, { new: true });
      return filiadoAtualizado;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      await Filiado.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FiliadoRepository;
