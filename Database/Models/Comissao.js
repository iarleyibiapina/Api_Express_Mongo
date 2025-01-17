const mongoose = require("mongoose");

const comissaoSchema = new mongoose.Schema({
    filiado_id:     { type: mongoose.Schema.Types.ObjectId, ref: 'Filiado', required: true },
    data:           { type: Date, default: Date.now },
    valor_comissao: { type: Number, required: true },
    descricao:      { type: String },
}, { versionKey: false }); 
  
const Comissao = mongoose.model('Comissao', comissaoSchema);

module.exports = Comissao;