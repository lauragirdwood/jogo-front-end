import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseUrl = "http://localhost:8080/api_quiz/v1/usuarios"

  constructor(private http: HttpClient) { }

  // READ do CRUD
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);  // isso aqui são crases!
  }

  getUsuario(id_usuario: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id_usuario}`);  // isso aqui são crases!
  }

  // CREATE do CRUD
  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);  // isso aqui são crases!
  }

  // UPDATE do CRUD
  updateUsuario(id_usuario: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id_usuario}`, value);
  }

  // DELETE do CRUD
  deleteUsuario(id_usuario: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_usuario}`, {responseType: `text`});
  }
}
