import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit{
  tarefaEmAndamento$: Observable<any> | undefined;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaEmAndamento$ = this.tarefaService.getTarefaEmAndamento();
  }
}
