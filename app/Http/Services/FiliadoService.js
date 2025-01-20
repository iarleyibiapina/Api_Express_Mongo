const FiliadoRepository = require("../../Database/Repositories/Mongo/FiliadoRepository");
const FiliadoDTO = require("../DTOs/FiliadoDTO");

class FiliadoService
{
    async criar(filiado)
    {
        try {
            return await FiliadoRepository.criar(new FiliadoDTO({
                nome_filiado:        filiado.nome_filiado,
                meta:                filiado.meta,
                url:                 filiado.url,
                numero_de_clicks: filiado.numero_de_clicks,
            }).toObject());
        } catch (error) {
            throw error;
        }
    }
    
    async listar()
    {
        try {
            const filiados = await FiliadoRepository.listar();
            return filiados.length == 0 ? { mensagem: "Nao ha filiados"} : filiados;
        } catch (error) {
            throw error;
        }
    }

    async encontrar(id) 
    {
        try{
            const objectFiliado = await FiliadoRepository.encontrar(id);
            return new FiliadoDTO({
                nome_filiado:        objectFiliado.nome_filiado,
                meta:                objectFiliado.meta,
                url:                 objectFiliado.url,
                numero_de_clicks: objectFiliado.numero_de_clicks,
            }).toObject();
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, filiado)
    {
        try {   
            return await FiliadoRepository.atualizar(id, filiado);
        } catch (error) {
            throw error;
        }
    }

    async deletar(id)
    {
        try {
            return await FiliadoRepository.deletar(id);
        } catch (error) {
            throw error;
        }
    }

    async clique(id)
    {
        try {
            return await FiliadoRepository.clique(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new FiliadoService();