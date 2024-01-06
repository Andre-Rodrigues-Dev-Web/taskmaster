import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { MenuModule } from './components/menu/menu.module';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TopoComponent,
    TarefasComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [
  ],
  exports: [
   TopoComponent,
   MenuModule,
   TarefasComponent,
   HttpClientModule
  ],
})
export class SharedModule {}
