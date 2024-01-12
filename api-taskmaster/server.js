const express = require('express');
const cors = require('cors');
const { getTarefas, tarefas } = require('./mocks/tarefas');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/tarefas', getTarefas);

app.post('/api/tarefas', (req, res) => {
  const novaTarefa = req.body;
  tarefas.push(novaTarefa);
  res.json({ mensagem: 'Tarefa adicionada com sucesso!' });
});

app.listen(port, () => {
  console.log(`API mockada rodando em http://localhost:${port}`);
});
