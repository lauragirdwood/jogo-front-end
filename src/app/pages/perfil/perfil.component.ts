import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';
import { FooterService } from 'src/app/footer/footer.service';
import { HeaderService } from 'src/app/header/header.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private avatar: string;

  constructor( private perfilService: PerfilService, public footer: FooterService, public header: HeaderService) { }

  ngOnInit() {
    this.avatar = this.perfilService.buscaAvatar();

    this.footer.esconder();
    this.header.esconder();
  }

  trocarImagem(){
    this.avatar = this.perfilService.buscaAvatar();

  }

}
