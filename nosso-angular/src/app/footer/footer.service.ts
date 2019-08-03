import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  visibilidade: boolean;

  constructor( ) { this.visibilidade = false; }

  esconder() {this.visibilidade = false;}
  mostrar() {this.visibilidade = true;}
}
