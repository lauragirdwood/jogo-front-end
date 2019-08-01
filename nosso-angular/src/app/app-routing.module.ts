import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { JogoComponent } from './pages/jogo/jogo.component';
import { RespostacorretaComponent } from './pages/respostacorreta/respostacorreta.component';
import { RespostaerradaComponent } from './pages/respostaerrada/respostaerrada.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'usuario/:id_usuario', component: UsuarioUpdateComponent},
  {path: 'add', component: UsuarioCreateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'jogo', component: JogoComponent},
  {path: 'respostacorreta', component: RespostacorretaComponent},
  {path: 'respostaerrada', component: RespostaerradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
