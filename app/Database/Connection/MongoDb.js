const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../env/Mongo/.env') });
const mongoose = require("mongoose");

// Monta a URL dinamicamente usando variáveis de ambiente
const mongoUser     = process.env.MONGO_INITDB_ROOT_USERNAME;
const mongoPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
const mongoHost     = process.env.MONGO_HOST || 'localhost';
const mongoPort     = process.env.MONGO_PORT || 27017;
const mongoDatabase = process.env.MONGO_INITDB_DATABASE;

const mongoURL = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}?authSource=admin`;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("======================");
    console.log("Connected to database");
});

module.exports = db;