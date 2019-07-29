import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'usuario/:id_usuario', component: UsuarioUpdateComponent},
  {path: 'add', component: UsuarioCreateComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
