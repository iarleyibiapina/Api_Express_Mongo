const ComissaoRepository = require("../../Database/Repositories/Mongo/ComissaoRepository");

class ComissaoService
{
    constructor() {
        this.exampleRepository = new ComissaoRepository();
    }
}

module.exports = ComissaoService;