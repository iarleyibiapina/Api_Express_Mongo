// Repositorio abstrato que servira de exemplo e 'interface'
class AbstractRepository {

  async criar(dados) {
    try {
        throw new Error('Requer implementacao');
    } catch (error) {
      throw error;
    }
  }

  async listar() {
    try {
        throw new Error('Requer implementacao');
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, dados) {
    try {
        throw new Error('Requer implementacao');
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
        throw new Error('Requer implementacao');
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AbstractRepository;
