class ComissaoDTO {
    constructor({
      filiado_id,
      valor_comissao,
      descricao,
    }) {
      this._filiado_id = this._validateFiliadoId(filiado_id);
      this._valor_comissao = this._validateValorComissao(valor_comissao);
      this._descricao = this._validateDescricao(descricao);
    }
  
    _validateFiliadoId(filiado_id) {
      if (!filiado_id || typeof filiado_id !== 'string') {
        throw new Error('O ID do filiado deve ser uma string.');
      }
      return filiado_id.trim();
    }
  
    _validateValorComissao(valor_comissao) {
      if (typeof valor_comissao !== 'number' || valor_comissao <= 0) {
        throw new Error('O valor da comissão deve ser um número positivo.');
      }
      return valor_comissao;
    }
  
    _validateDescricao(descricao) {
      if (descricao && typeof descricao !== 'string') {
        throw new Error('A descrição deve ser uma string.');
      }
      return descricao ? descricao.trim() : descricao;
    }
  
    get filiado_id() {
      return this._filiado_id;
    }
  
    get valor_comissao() {
      return this._valor_comissao;
    }
  
    get descricao() {
      return this._descricao;
    }
  
    toObject() {
      return {
        filiado_id: this._filiado_id,
        valor_comissao: this._valor_comissao,
        descricao: this._descricao,
      };
    }
  }
  
  module.exports = ComissaoDTO;
  