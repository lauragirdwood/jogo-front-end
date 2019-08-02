import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
// <<<<<<< HEAD
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { JogoComponent } from './pages/jogo/jogo.component';
import { RespostacorretaComponent } from './pages/respostacorreta/respostacorreta.component';
import { RespostaerradaComponent } from './pages/respostaerrada/respostaerrada.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';




// // import { JogoComponent } from './pages/jogo/jogo.component';
// import { from } from 'rxjs';
// >>>>>>> parent of c3c374d... Atualizando com as alterações de ontem. Pagina contato, e sobre nós, passadas para o angular.

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'usuario/:id_usuario', component: UsuarioUpdateComponent},
  {path: 'add', component: UsuarioCreateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent},
// <<<<<<< HEAD
  {path:'sobrenos', component: SobrenosComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'jogo', component: JogoComponent},
  {path: 'respostacorreta', component: RespostacorretaComponent},
  {path: 'respostaerrada', component: RespostaerradaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'resultado', component: ResultadoComponent}

// =======
//   {path: 'jogo', component: JogoComponent}
// >>>>>>> parent of c3c374d... Atualizando com as alterações de ontem. Pagina contato, e sobre nós, passadas para o angular.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
