class PagamentoDTO {
    constructor({
      filiado_id,
      valor_pagamento,
      status,
    }) {
      this._filiado_id = this._validateFiliadoId(filiado_id);
      this._valor_pagamento = this._validateValorPagamento(valor_pagamento);
      this._status = this._validateStatus(status);
    }
  
    _validateFiliadoId(filiado_id) {
      if (!filiado_id || typeof filiado_id !== 'string') {
        throw new Error('O ID do filiado deve ser uma string.');
      }
      return filiado_id.trim();
    }
  
    _validateValorPagamento(valor_pagamento) {
      if (typeof valor_pagamento !== 'number' || valor_pagamento <= 0) {
        throw new Error('O valor do pagamento deve ser um número positivo.');
      }
      return valor_pagamento;
    }
  
    _validateStatus(status) {
      if (status && typeof status !== 'string') {
        throw new Error('O status deve ser uma string.');
      }
      const validStatus = ['pendente', 'pago'];
      if (status && !validStatus.includes(status.toLowerCase())) {
        throw new Error('O status deve ser "pendente" ou "pago".');
      }
      return status ? status.trim().toLowerCase() : status;
    }
  
    get filiado_id() {
      return this._filiado_id;
    }
  
    get valor_pagamento() {
      return this._valor_pagamento;
    }
  
    get status() {
      return this._status;
    }
  
    toObject() {
      return {
        filiado_id: this._filiado_id,
        valor_pagamento: this._valor_pagamento,
        status: this._status,
      };
    }
  }
  
  module.exports = PagamentoDTO;
  