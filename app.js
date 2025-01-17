const app  = require("express")();
const express = require("express");

// HTTP
const PORT = 3000;
app.listen(PORT, () => {
    console.log("======================");
    console.log(`Servidor rodando - localhost:${PORT}`);
})
