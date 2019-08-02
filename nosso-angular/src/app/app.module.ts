import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
<<<<<<< HEAD
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { JogoComponent } from './pages/jogo/jogo.component';
import { RespostacorretaComponent } from './pages/respostacorreta/respostacorreta.component';
import { RespostaerradaComponent } from './pages/respostaerrada/respostaerrada.component';
=======
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { JogoComponent } from './pages/jogo/jogo.component';
>>>>>>> parent of c3c374d... Atualizando com as alterações de ontem. Pagina contato, e sobre nós, passadas para o angular.


@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
<<<<<<< HEAD
    SobrenosComponent,
    ContatoComponent,
    PerfilComponent,
    JogoComponent,
    RespostacorretaComponent,
    RespostaerradaComponent,
    PerfilComponent,
=======
    JogoComponent
>>>>>>> parent of c3c374d... Atualizando com as alterações de ontem. Pagina contato, e sobre nós, passadas para o angular.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
