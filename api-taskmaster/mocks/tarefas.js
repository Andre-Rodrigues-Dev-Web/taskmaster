const getTarefas = (req, res) => {
  const tarefas = [
    {
      nome: 'Desenvolvimento de software de gestão',
      dataInicio: '01/01/2024',
      dataConclusao: '06/01/2024',
      status: 'Em andamento',
    },
    {
      nome: 'Implementar novas funcionalidades',
      dataInicio: '02/01/2024',
      dataConclusao: '08/01/2024',
      status: 'Em andamento',
    },
    {
      nome: 'Realizar testes de qualidade',
      dataInicio: '03/01/2024',
      dataConclusao: '10/01/2024',
      status: 'Pausada',
    },
    {
      nome: 'Revisar código-fonte',
      dataInicio: '04/01/2024',
      dataConclusao: '12/01/2024',
      status: 'Planejada',
    },
    {
      nome: 'Preparar documentação',
      dataInicio: '05/01/2024',
      dataConclusao: '14/01/2024',
      status: 'Planejada',
    },
    {
      nome: 'Realizar deploy',
      dataInicio: '06/01/2024',
      dataConclusao: '16/01/2024',
      status: 'Planejada',
    },
  ];

  res.json(tarefas);
};

module.exports = {
  getTarefas,
};
