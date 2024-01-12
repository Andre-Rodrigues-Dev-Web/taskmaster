import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TarefaService } from './tarefa.service';
import { NgZone } from '@angular/core';

describe('TarefaService', () => {
  let service: TarefaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarefaService, NgZone],
    });

    service = TestBed.inject(TarefaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tarefas', () => {
    const mockTarefas = [{ nome: 'Tarefa 1', status: 'Em andamento' }];

    service.getTarefas().subscribe((tarefas) => {
      expect(tarefas).toEqual(mockTarefas);
    });

    const req = httpTestingController.expectOne('http://localhost:3001/api/tarefas');
    expect(req.request.method).toEqual('GET');
    req.flush(mockTarefas);
  });

  it('should cadastrar tarefa successfully', (done: DoneFn) => {
    const novaTarefa = { nome: 'Nova Tarefa', status: 'Em andamento' };

    service.cadastrarTarefa(novaTarefa).subscribe(
      (response) => {
        expect(response).toBeUndefined();
        done();
      },
      (error) => {
        fail('Should not have failed');
        done();
      }
    );

    const req = httpTestingController.expectOne('http://localhost:3001/api/tarefas');
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });

  it('should handle error during cadastrar tarefa', (done: DoneFn) => {
    const novaTarefa = { nome: 'Nova Tarefa', status: 'Em andamento' };
    const errorMessage = 'An error occurred during the request';

    service.cadastrarTarefa(novaTarefa).subscribe(
      () => {
        fail('Should not have succeeded');
        done();
      },
      (error) => {
        expect(error).toEqual(errorMessage);
        done();
      }
    );

    const req = httpTestingController.expectOne('http://localhost:3001/api/tarefas');
    expect(req.request.method).toEqual('POST');
    req.flush({}, { status: 500, statusText: errorMessage });
  });
});
