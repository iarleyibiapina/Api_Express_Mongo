const mongoose = require("mongoose");

const filiado = new mongoose.Schema({
    nome_filiado:     {type: String, required: true},
    meta:             {type: Number, required: true}, 
    url:              {type: String, required: true},
    numero_de_clicks: {type: Number, default: 0},
}, { versionKey: false });

const Filiado = mongoose.model("Filiado", filiado);

module.exports = Filiado;