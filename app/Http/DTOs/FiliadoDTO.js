class FiliadoDTO {
    constructor({
      nome_filiado,
      meta,
      url,
      numero_de_clicks,
    }) {
      this._nome_filiado        = this._validateNomeFiliado(nome_filiado);
      this._meta                = this._validateMeta(meta);
      this._url                 = this._validateUrl(url);
      this._numero_de_clicks = this._validateComissaoPorClique(numero_de_clicks);
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
  
    _validateComissaoPorClique(numero_de_clicks) {
      if (typeof numero_de_clicks !== 'number' || numero_de_clicks < 0) {
        throw new Error('A comissão por clique deve ser um número positivo.');
      }
      return numero_de_clicks;
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
  
    get numero_de_clicks() {
      return this._numero_de_clicks;
    }
  
    toObject() {
      return {
        nome_filiado: this._nome_filiado,
        meta: this._meta,
        url: this._url,
        numero_de_clicks: this._numero_de_clicks,
      };
    }
  }
  
  module.exports = FiliadoDTO;
  