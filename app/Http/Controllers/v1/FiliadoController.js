const FiliadoService = require("../../Services/FiliadoService");

class FiliadoController {
  async store(req, res, next) {
    try {
      return res.status(201).json(await FiliadoService.criar(req.body));
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      return res.json(await FiliadoService.listar());
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      return res.json(await FiliadoService.encontrar(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      return res.json(await FiliadoService.atualizar(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await FiliadoService.deletar(req.params.id);      
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  async clicado(req, res, next) {
    try {
      const filiado = await FiliadoService.clique(req.params.id);
      return res.json({
        mensagem: "numero de clique aumentado",
        filiado
      }); 
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FiliadoController();
