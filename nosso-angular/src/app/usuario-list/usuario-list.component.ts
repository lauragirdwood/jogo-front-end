import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.usuarios = this.usuarioService.getUsuarios();
  }

  deleteUsuario(id: number){
    this.usuarioService.deleteUsuario(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    )
  }

  usuarioUpdate(id: number) {
    this.router.navigate(['update', id]);
  }

}
