import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private apiUrl = 'http://localhost:3001/api/tarefas';
  private tarefasSubject = new BehaviorSubject<any[]>([]);
  public tarefas$ = this.tarefasSubject.asObservable();

  constructor(private http: HttpClient) {
    this.carregarTarefas();
  }

  private carregarTarefas() {
    this.getTarefas().subscribe(
      (tarefas) => this.tarefasSubject.next(tarefas),
      (error) => console.error('Erro ao carregar tarefas', error)
    );
  }

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError<any[]>('getTarefas', []))
    );
  }

  getTarefaEmAndamento(): Observable<any> {
    return this.tarefas$.pipe(
      filter((tarefas) => tarefas.length > 0), // Aguarda até que haja tarefas
      take(1), // Garante que só leia o primeiro valor
      switchMap((tarefas) => {
        const tarefaEmAndamento = tarefas.find((tarefa) => tarefa.status === 'Em andamento');
        return tarefaEmAndamento ? of(tarefaEmAndamento) : throwError('Nenhuma tarefa em andamento');
      }),
      catchError(this.handleError<any>('getTarefaEmAndamento', null))
    );
  }

  cadastrarTarefa(novaTarefa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, novaTarefa).pipe(
      switchMap(() => this.getTarefas())
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(result as T);
    };
  }
}
