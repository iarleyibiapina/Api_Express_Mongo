const mongoose = require("mongoose");

const pagamentoSchema = new mongoose.Schema({
    filiado_id:      { type: mongoose.Schema.Types.ObjectId, ref: 'Filiado', required: true },
    data_pagamento:  { type: Date, default: Date.now },
    valor_pagamento: { type: Number, required: true },
    status:          { type: String, enum: ['pendente', 'pago'], default: 'pendente' },
}, { versionKey: false });
  
const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;