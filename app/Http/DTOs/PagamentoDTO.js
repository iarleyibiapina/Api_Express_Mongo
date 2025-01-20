class PagamentoDTO {
    constructor({
      filiado_id,
      data_pagamento,
      valor_pagamento,
      status,
    }) {
      this._data_pagamento  = this._validateData(data_pagamento);
      this._filiado_id      = this._validateFiliadoId(filiado_id);
      this._valor_pagamento = this._validateValorPagamento(valor_pagamento);
      this._status          = this._validateStatus(status);
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
  
    _validateValorPagamento(valor_pagamento) {
      if (typeof valor_pagamento !== 'number' || valor_pagamento <= 0) {
        throw new Error('O valor do pagamento deve ser um número positivo.');
      }
      return valor_pagamento;
    }
    
    // TODO trabalhar validacao data
    _validateData(data) {
      // if (!data || (typeof data !== 'object' || typeof data === 'string') ) {
        //   throw new Error('A data deve ser uma string no formato ISO 8601.');
        // }
        
      // const parsedDate = new Date(data);
      // console.info(parsedDate);
      // if (isNaN(parsedDate.getTime())) {
      //   throw new Error('A data fornecida é inválida.');
      // }
      // return parsedDate.toISOString(); 
      return data;
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
        filiado_id:      this._filiado_id,
        valor_pagamento: this._valor_pagamento,
        status:          this._status,
      };
    }
  }
  
  module.exports = PagamentoDTO;
  