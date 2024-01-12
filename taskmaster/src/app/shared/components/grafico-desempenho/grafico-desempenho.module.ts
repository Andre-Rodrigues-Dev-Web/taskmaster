import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoDesempenhoComponent } from './grafico-desempenho.component';


@NgModule({
  declarations: [
    GraficoDesempenhoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GraficoDesempenhoComponent
  ]
})
export class GraficoDesempenhoModule { }
