import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MinhasTarefasComponent } from './views/minhas-tarefas/minhas-tarefas.component';
import { ErroComponent } from './views/erro/erro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'minhas-tarefas', component: MinhasTarefasComponent },
  { path: '**', component: ErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
