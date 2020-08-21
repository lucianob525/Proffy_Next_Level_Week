import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar informações
// POST: Criar alguma informação
// PUT: Atualizar uma informação inexistente
// DELETE: deletar uma informação existente

// Corpo (Request Body): Dados para criação ou alteração de um registro  
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação



app.listen(3333);