const ComissaoRepository = require("../../Database/Repositories/Mongo/ComissaoRepository");
const ComissaoDTO = require("../DTOs/ComissaoDTO");

class ComissaoService
{
    constructor() {
        this.ComissaoRepository = new ComissaoRepository();
    }

    async criar(comissao)
    {
        return await this.ComissaoRepository.criar(new ComissaoDTO({
            filiado_id:     comissao.filiado_id,
            valor_comissao: comissao.valor_comissao,
            descricao:      comissao.descricao,
          }).toObject());
    }

    async listar()
    {
        return await this.ComissaoRepository.listar();
    }

    async encontrar(id) 
    {
        const objectComissao = this.ComissaoRepository.encontrar(id).toObject();
        return new ComissaoDTO({
          filiado_id: objectComissao.filiado_id,
          valor_comissao: objectComissao.valor_comissao,
          descricao: objectComissao.descricao,    
        }).toObject();
    }

    async atualizar(id, comissao)
    {
        return await this.ComissaoRepository.atualizar(id, comissao);
    }

    async deletar(id)
    {
        return await this.ComissaoRepository.deletar(id);
    }
}

module.exports = ComissaoService;