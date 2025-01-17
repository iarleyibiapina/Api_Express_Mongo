const app  = require("express")();
const express = require("express");

// CONEXAO COM O BANCO
const db     = require("./Database/Connection/MongoDb.js")
const Router = require("./Routes/Router.js");
const FILTER = require("./Http/Filters/Filter.js");
// 
app.use(express.json()); // parsea para json

// app.use(MIDDLEWARE);
app.use('/api', Router);
app.use(FILTER);

// HTTP
const PORT = 3000;
app.listen(PORT, () => {
    console.log("======================");
    console.log(`Servidor rodando - localhost:${PORT}`);
})
