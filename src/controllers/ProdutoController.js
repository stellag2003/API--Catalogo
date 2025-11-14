import  Produto  from "../models/Produto.js";

let produtos = [];
let proximoId = 1;

class ProdutoController {
  static async listarTodos(req, res) {
    try {
      const listadeProdutos = await Produto.find({});
      res.status(200).json(listadeProdutos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const id = req.params.id;

      const produto = await Produto.findById(id);
      res.status(200).json(produto);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async criarProduto(req, res) {
    try {
      const novoProduto = new Produto(req.body);
      await novoProduto.save();
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async atualizar(req, res) {
    const id = req.params.id;
    const dadosAtualizados = req.body;

    try {
      const produtoAtualizado = await Produto.findByIdAndUpdate(
        id,
        dadosAtualizados
      );
      res.status(200).json(produtoAtualizado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async deletar(req, res) {
    const id = req.params.id;

    try {
      await Produto.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ProdutoController;
