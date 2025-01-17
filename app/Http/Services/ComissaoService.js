const ComissaoRepository = require("../../Database/Repositories/Mongo/ComissaoRepository");

class ComissaoService
{
    // Falta aplicar os repositorios
    constructor() {
        this.exampleRepository = new ComissaoRepository();
    }
}

module.exports = ComissaoService;