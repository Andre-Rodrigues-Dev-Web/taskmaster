import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: any[] = [];
  statusList: string[] = [];
  statusSelecionado: string = '';
  modalAberto = false;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.tarefas$.subscribe((tarefas) => {
      if (tarefas && tarefas.length > 0) {
        this.tarefas = tarefas;
        this.statusList = Array.from(new Set(this.tarefas.map(tarefa => tarefa.status)));
      }
    });
  }

  // status color
  getStatus(status: string): string {
    switch (status) {
      case 'Em andamento':
        return 'status-blue';
      case 'Concluida':
        return 'status-green';
      case 'Pausada':
        return 'status-orange';
      case 'Atrasada':
        return 'status-red';
      case 'Backlog':
        return 'status-dark_blue';
      default:
        return 'status';
    }
  }

  // Modal
  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  // Função para obter tarefa em andamento
  getTarefaEmAndamento() {
    this.tarefaService.getTarefaEmAndamento().subscribe(
      (tarefa) => {
        console.log('Tarefa em andamento:', tarefa);
      },
      (error) => {
        console.error('Erro ao obter tarefa em andamento', error);
      }
    );
  }
}
