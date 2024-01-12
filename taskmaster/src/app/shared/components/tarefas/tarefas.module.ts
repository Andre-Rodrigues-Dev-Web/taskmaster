import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasComponent } from './tarefas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterByStatusPipe } from '../../pipes/filter-by-status.pipe.spec';
import { ModalTarefaModule } from "../modal-tarefa/modal-tarefa.module";
import { TarefaService } from '../../services/tarefa.service';

@NgModule({
    declarations: [
        TarefasComponent,
        FilterByStatusPipe
    ],
    exports: [
        TarefasComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ModalTarefaModule
    ],
    providers: [
      TarefaService
    ]
})
export class TarefasModule { }


