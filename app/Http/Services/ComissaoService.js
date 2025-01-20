const ComissaoRepository = require("../../Database/Repositories/Mongo/ComissaoRepository");
const ComissaoDTO = require("../DTOs/ComissaoDTO");

class ComissaoService
{
    async criar(comissao)
    {
        try {
            return await ComissaoRepository.criar(new ComissaoDTO({
                filiado_id:     comissao.filiado_id,
                valor_comissao: comissao.valor_comissao,
                descricao:      comissao.descricao,
            }).toObject());
        } catch (error) {
            throw error;
        }
    }

    async listar()
    {
        try { 
            const comissoes = await ComissaoRepository.listar();        
            return comissoes.length == 0 ? { mensagem:  "Nao ha comissoes"} : comissoes;
        } catch (error) {
            throw error;
        }
    }

    async encontrar(id) 
    {
        try{
            const objectComissao = await ComissaoRepository.encontrar(id);
            return new ComissaoDTO({
            filiado_id:     objectComissao.filiado_id,
            data:           objectComissao.data,
            valor_comissao: objectComissao.valor_comissao,
            descricao:      objectComissao.descricao,    
            }).toObject();
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, comissao)
    {
        try {
            return await ComissaoRepository.atualizar(id, comissao);
        } catch (error) {
            throw error;
        }
    }

    async deletar(id)
    {
        try { 
            return await ComissaoRepository.deletar(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ComissaoService();