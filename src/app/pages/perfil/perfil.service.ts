import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private urlBase = 'https://api.adorable.io/avatars/285/abott@adorable.';

  constructor( ) { }

  buscaAvatar() {
    return this.urlBase + Math.random().toString(36).replace('0.','') + '.png';
  }
}
