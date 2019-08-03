import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  visibilidade: boolean;

  constructor() { this.visibilidade = false; }

  mostrar() {this.visibilidade = true;}
  esconder() {this.visibilidade = false;}

}
