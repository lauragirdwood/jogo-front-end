import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
