import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseUrl = "http://www.mocky.io/v2/5d39d0ad2f000049006ebe71"

  constructor(private http: HttpClient) { }

  // READ do CRUD
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);  // isso aqui são crases!
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);  // isso aqui são crases!
  }

  // CREATE do CRUD
  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);  // isso aqui são crases!
  }

  // UPDATE do CRUD
  updateUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // DELETE do CRUD
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: `text`});
  }



}
