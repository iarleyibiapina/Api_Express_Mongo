class ComissaoDTO {
    constructor({
      filiado_id,
      data,
      valor_comissao,
      descricao,
    }) {
      this._data           = this._validateData(data);
      this._filiado_id     = this._validateFiliadoId(filiado_id);
      this._valor_comissao = this._validateValorComissao(valor_comissao);
      this._descricao      = this._validateDescricao(descricao);
    }
  
    _validateFiliadoId(filiado_id) {
      if (!filiado_id ||
          (typeof filiado_id !== 'string' && typeof filiado_id !== 'object')) 
            throw new Error('O ID do filiado deve ser uma string ou um ObjectId válido do MongoDB.');
  
      if (typeof filiado_id === 'string') {
        if (!ObjectId.isValid(filiado_id)) 
          throw new Error('O ID do filiado fornecido como string é inválido.');
        return filiado_id.trim();
      }
  
      return filiado_id;   
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

    // TODO trabalhar validacao data
    _validateData(data) {
      // if (!data || (typeof data !== 'object' || typeof data === 'string') ) {
      //   throw new Error('A data deve ser uma string no formato ISO 8601.');
      // }
  
      // const parsedDate = new Date(data);
      // if (isNaN(parsedDate.getTime())) {
      //   throw new Error('A data fornecida é inválida.');
      // }
      // return parsedDate.toISOString(); 
      return data;
    }
  
    get filiado_id() {
      return this._filiado_id;
    }

    get data() {
      return this._data;
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
        data: this._data,
        valor_comissao: this._valor_comissao,
        descricao: this._descricao,
      };
    }
  }
  
  module.exports = ComissaoDTO;
  