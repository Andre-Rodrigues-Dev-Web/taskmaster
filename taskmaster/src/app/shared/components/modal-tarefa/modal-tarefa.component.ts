import { Component, EventEmitter, Output } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.scss']
})
export class ModalTarefaComponent {
  novaTarefa = {
    nome: '',
    dataInicio: '',
    dataConclusao: '',
    status: '',
    tempoDeExecucao: '',
  };
  sucessoCadastro = false;

  @Output() fecharModalEvent = new EventEmitter<boolean>();

  constructor(private tarefaService: TarefaService) {}

  cadastrarTarefa() {
    this.tarefaService.cadastrarTarefa(this.novaTarefa).subscribe(
      () => {
        this.sucessoCadastro = true;
        setTimeout(() => {
          this.fecharModal();
        }, 2000);
      },
      (error) => {
        console.error('Erro no cadastro:', error);
      }
    );
  }

  fecharModal() {
    this.sucessoCadastro = false;
    this.fecharModalEvent.emit(true);
  }
}
