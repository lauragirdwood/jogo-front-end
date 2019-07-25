import { UsuarioService } from '../usuario.service';
import { Usuario} from '../usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.createUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    setTimeout(() => {
    this.router.navigate(['/usuarios']);  
    }, 2000);    
  }
}
