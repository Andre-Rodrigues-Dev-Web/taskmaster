import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MinhasTarefasComponent } from './minhas-tarefas/minhas-tarefas.component';
import { ErroComponent } from './erro/erro.component';
import { SharedModule } from '../shared/shared.module';
import { DesempenhoComponent } from './desempenho/desempenho.component';

@NgModule({
  declarations: [
    HomeComponent,
    MinhasTarefasComponent,
    ErroComponent,
    DesempenhoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [

  ],
  exports: [
    HomeComponent,
    MinhasTarefasComponent,
    ErroComponent
  ],
})
export class SharedPagesModule {}
