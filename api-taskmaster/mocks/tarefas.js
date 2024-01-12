// tarefas.js
const tarefas = [
  {
    nome: 'Desenvolvimento de software de gestão',
    dataInicio: '01/01/2024',
    dataConclusao: '06/01/2024',
    status: 'Em andamento',
    tempoDeExecucao: '5 horas',
  },
  {
    nome: 'Revisão de código',
    dataInicio: '10/01/2024',
    dataConclusao: '15/01/2024',
    status: 'Concluida',
    tempoDeExecucao: '8 horas',
  },
  {
    nome: 'Testes de integração',
    dataInicio: '20/01/2024',
    dataConclusao: '25/01/2024',
    status: 'Pausada',
    tempoDeExecucao: '3 horas',
  },
  {
    nome: 'Planejamento de sprint',
    dataInicio: '01/02/2024',
    dataConclusao: '10/02/2024',
    status: 'Backlog',
    tempoDeExecucao: '0 horas',
  },
];

const getTarefas = (req, res) => {
  res.json(tarefas);
};

module.exports = {
  tarefas,
  getTarefas,
};
