import { Component, OnInit } from '@angular/core';
import {JogoService} from "./jogo.service";
import {Observable} from "rxjs";
import {Pergunta} from "../pergunta/pergunta";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  pergunta: Pergunta;
  pontuacao: number;

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.jogoService.getPerguntas(2).subscribe(
      data => {
        console.log(data);
        this.pergunta = data;
              }, error => console.log(error));
  }

  clickZero() {
    if (this.pergunta.respostas[0].certa) {
      alert("achou certo otario");
    } else {
      alert("achou errado otario")
    }
  }

  clickUm() {
    if (this.pergunta.respostas[1].certa) {
      alert("achou certo otario");
      this.pontuacao += this.pontuacao;
    } else {
      alert("achou errado otario")
    }
  }

  clickDois() {
    if (this.pergunta.respostas[2].certa) {
      alert("achou certo otario");
    } else {
      alert("achou errado otario")
    }
  }

  clickTres() {
    if (this.pergunta.respostas[3].certa) {
      alert("achou certo otario");
    } else {
      alert("achou errado otario")
    }
  }


}
