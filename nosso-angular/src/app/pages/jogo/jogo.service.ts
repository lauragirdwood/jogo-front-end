/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private baseUrl = 'http://localhost:8080/api_quiz/v1/perguntas';

  constructor(private http: HttpClient) { }

  getPerguntas(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

}
