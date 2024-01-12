import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDesempenhoComponent } from './grafico-desempenho.component';

describe('GraficoDesempenhoComponent', () => {
  let component: GraficoDesempenhoComponent;
  let fixture: ComponentFixture<GraficoDesempenhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDesempenhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
