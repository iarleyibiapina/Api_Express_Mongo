const PagamentoRepository = require("../../Database/Repositories/Mongo/PagamentoRepository");
const PagamentoDTO = require("../DTOs/PagamentoDTO");

class PagamentoService
{
    async criar(pagamento)
    {
        try {
            return await PagamentoRepository.criar(new PagamentoDTO(pagamento).toObject());
        } catch (error) {
            throw error;
        }
    }
    
    async listar()
    {
        try {
            const pagamentos = await PagamentoRepository.listar();
            return pagamentos.length == 0 ? { mensagem: "Nao ha pagamentos"} : pagamentos;
        } catch (error) {
            throw error;
        }
    }

    async encontrar(id)
    {
        try {
            const pagamento = await PagamentoRepository.encontrar(id);
            return new PagamentoDTO(pagamento).toObject();
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, pagamento)
    {
        try{
            return await PagamentoRepository.atualizar(id, pagamento);
        } catch (error) {
            throw error;
        }
    }

    async deletar(id)
    {
        try {
            return await PagamentoRepository.deletar(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PagamentoService();