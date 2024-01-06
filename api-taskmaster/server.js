const express = require('express');
const cors = require('cors');
const tarefasMock = require('./mocks/tarefas');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/tarefas', tarefasMock.getTarefas);

app.listen(port, () => {
  console.log(`API mockada rodando em http://localhost:${port}`);
});
