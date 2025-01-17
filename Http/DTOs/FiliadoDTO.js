class FiliadoDTO {
    constructor({
      nome_filiado,
      meta,
      url,
      comissao_por_clic,
    }) {
      this._nome_filiado = this._validateNomeFiliado(nome_filiado);
      this._meta = this._validateMeta(meta);
      this._url = this._validateUrl(url);
      this._comissao_por_clic = this._validateComissaoPorClic(comissao_por_clic);
    }
  
    _validateNomeFiliado(nome_filiado) {
      if (typeof nome_filiado !== 'string') {
        throw new Error('O nome do filiado deve ser uma string.');
      }
      return nome_filiado.trim();
    }
  
    _validateMeta(meta) {
      if (typeof meta !== 'number' || meta <= 0) {
        throw new Error('A meta deve ser um número positivo.');
      }
      return meta;
    }
  
    _validateUrl(url) {
      if (typeof url !== 'string' || !url.startsWith('http')) {
        throw new Error('A URL deve ser uma string válida que comece com http.');
      }
      return url.trim();
    }
  
    _validateComissaoPorClic(comissao_por_clic) {
      if (typeof comissao_por_clic !== 'number' || comissao_por_clic <= 0) {
        throw new Error('A comissão por clique deve ser um número positivo.');
      }
      return comissao_por_clic;
    }
  
    get nome_filiado() {
      return this._nome_filiado;
    }
  
    get meta() {
      return this._meta;
    }
  
    get url() {
      return this._url;
    }
  
    get comissao_por_clic() {
      return this._comissao_por_clic;
    }
  
    toObject() {
      return {
        nome_filiado: this._nome_filiado,
        meta: this._meta,
        url: this._url,
        comissao_por_clic: this._comissao_por_clic,
      };
    }
  }
  
  module.exports = FiliadoDTO;
  