const FiliadoRepository = require("../../Database/Repositories/Mongo/FiliadoRepository");

class FiliadoService
{
    constructor() {
        this.FiliadoRepository = new FiliadoRepository();
    }

    async criar(comissao)
    {
        return this.FiliadoRepository.criar(comissao);
    }
    
    async listar()
    {
        return this.FiliadoRepository.listar();
    }

    async atualizar(id, comissao)
    {
        return this.FiliadoRepository.atualizar(id, comissao);
    }

    async deletar(id)
    {
        return this.FiliadoRepository.deletar(id);
    }
}

module.exports = FiliadoService;