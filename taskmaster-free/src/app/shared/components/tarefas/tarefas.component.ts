import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: any[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe(data => {
      this.tarefas = data;
    });
  }
}
