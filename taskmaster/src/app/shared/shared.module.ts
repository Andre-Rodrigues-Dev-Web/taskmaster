import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { MenuModule } from './components/menu/menu.module';
import { TarefasModule } from './components/tarefas/tarefas.module';
import { GraficoDesempenhoModule } from './components/grafico-desempenho/grafico-desempenho.module';
import { ModalTarefaModule } from './components/modal-tarefa/modal-tarefa.module';

@NgModule({
  declarations: [
    TopoComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    TarefasModule,
    GraficoDesempenhoModule,
    ModalTarefaModule
  ],
  providers: [
  ],
  exports: [
    TopoComponent,
    MenuModule,
    TarefasModule,
    GraficoDesempenhoModule,
    ModalTarefaModule
  ],
})
export class SharedModule {}
