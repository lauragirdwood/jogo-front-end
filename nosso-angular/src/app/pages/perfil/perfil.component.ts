import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private avatar: string;

  constructor( private perfilService: PerfilService ) { }

  ngOnInit() {
    this.avatar = this.perfilService.buscaAvatar();
  }

  trocarImagem(){
    this.avatar = this.perfilService.buscaAvatar();

  }

}
