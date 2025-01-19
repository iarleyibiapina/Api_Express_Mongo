const ComissaoRepository = require("../../Database/Repositories/Mongo/ComissaoRepository");

class ComissaoService
{
    constructor() {
        this.ComissaoRepository = new ComissaoRepository();
    }

    async criar(comissao)
    {
        return this.ComissaoRepository.criar(comissao);
    }
    
    async listar()
    {
        return this.ComissaoRepository.listar();
    }

    async atualizar(id, comissao)
    {
        return this.ComissaoRepository.atualizar(id, comissao);
    }

    async deletar(id)
    {
        return this.ComissaoRepository.deletar(id);
    }
}

module.exports = ComissaoService;