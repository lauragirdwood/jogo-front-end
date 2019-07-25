import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';


const routes: Routes = [
  {path: '', redirectTo: '/usuario', pathMatch: 'full'},
  {path: 'usuario', component: UsuarioListComponent},
  {path: 'usuario/:id', component: UsuarioUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
