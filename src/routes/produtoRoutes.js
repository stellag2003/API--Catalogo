import Router from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const router = Router();

router.get("/produtos", ProdutoController.listarTodos);
router.post("/produtos", ProdutoController.criarProduto);
router.get("/produtos/:id", ProdutoController.buscarPorId);
router.put("/produtos/:id", ProdutoController.atualizar);
router.delete("/produtos/:id", ProdutoController.deletar);

export default router;
