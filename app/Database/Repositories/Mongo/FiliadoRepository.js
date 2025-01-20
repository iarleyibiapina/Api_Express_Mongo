// FiliadoRepository.js
const mongoose = require('mongoose');
const Filiado = require('../../Models/Filiado');
const AbstractRepository = require('../AbstractRepository');

class FiliadoRepository extends AbstractRepository 
{
  _objectIdRegex = /^[a-f\d]{24}$/i; // regex para id

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
      const filiados = await Filiado.find();
      return filiados;
    } catch (error) {
      throw error;
    }
  }

  async encontrar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const filiado = Filiado.findById(id);
      if (!filiado) throw new NotFoundException('Filiado não encontrado');
      return filiado;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      const filiadoAtualizado = await Filiado.findByIdAndUpdate(id, dados, { new: true });
      return filiadoAtualizado;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      return await Filiado.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  async clique(id) {
    try {
      if(! this._objectIdRegex.test(id)) throw new Error('Informe um id valido');
      return await Filiado.findByIdAndUpdate( id, 
        { $inc: { numero_de_clicks: 1 } },
        { new: true} 
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new FiliadoRepository();
