import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MinhasTarefasComponent } from './minhas-tarefas/minhas-tarefas.component';
import { ErroComponent } from './erro/erro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    MinhasTarefasComponent,
    ErroComponent
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
