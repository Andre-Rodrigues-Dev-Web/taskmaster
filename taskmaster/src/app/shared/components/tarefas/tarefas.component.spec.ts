import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarefasComponent } from './tarefas.component';
import { TarefaService } from '../../services/tarefa.service';
import { of } from 'rxjs';

describe('TarefasComponent', () => {
  let component: TarefasComponent;
  let fixture: ComponentFixture<TarefasComponent>;
  let mockTarefaService: jasmine.SpyObj<TarefaService>;

  beforeEach(() => {
    mockTarefaService = jasmine.createSpyObj('TarefaService', ['getTarefas', 'tarefas$']);

    TestBed.configureTestingModule({
      declarations: [TarefasComponent],
      providers: [{ provide: TarefaService, useValue: mockTarefaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefasComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tarefas and status on init', () => {
    const mockTarefas = [{ nome: 'Tarefa 1', status: 'Em andamento' }];
    const mockStatusList = ['Em andamento'];

    mockTarefaService.getTarefas.and.returnValue(of(mockTarefas));
    mockTarefaService.tarefas$.and.returnValue(of(mockTarefas));

    fixture.detectChanges();

    expect(component.tarefas).toEqual(mockTarefas);
    expect(component.statusList).toEqual(mockStatusList);
  });
});
