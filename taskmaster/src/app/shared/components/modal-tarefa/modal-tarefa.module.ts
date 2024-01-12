import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalTarefaComponent } from './modal-tarefa.component';

@NgModule({
  declarations: [
    ModalTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ModalTarefaComponent,
  ],
})
export class ModalTarefaModule { }
