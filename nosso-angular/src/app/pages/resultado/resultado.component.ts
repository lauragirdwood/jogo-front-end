import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  pont: string = localStorage.getItem('pontuacao2');

  constructor() { }

  ngOnInit() {
    let pont = 0;
    localStorage.setItem('pontuacao2', String(pont));
  }
zeraPontuacao() {

}

}
