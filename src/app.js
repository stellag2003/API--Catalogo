import express from "express";
import produtoRoutes from "./routes/produtoRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Bem-vindo à API do Catálogo!");
});
