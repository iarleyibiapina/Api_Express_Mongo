const FiliadoRepository = require("../../Database/Repositories/Mongo/FiliadoRepository");

class FiliadoService
{
    constructor() {
        this.exampleRepository = new FiliadoRepository();
    }
}

module.exports = FiliadoService;