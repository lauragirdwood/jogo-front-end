import { Component, OnInit } from '@angular/core';
import {JogoService} from "./jogo.service";
import {Observable} from "rxjs";
import {Pergunta} from "../pergunta/pergunta";
import {NgIf} from "@angular/common";
import { FooterService } from 'src/app/footer/footer.service';
import { HeaderService } from 'src/app/header/header.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  pergunta: Pergunta;
  //pontuacao: number;

  constructor(private route: ActivatedRoute, private router: Router, private jogoService: JogoService, public footer: FooterService, public header: HeaderService) { }

  // aumentaPontuacao() {
  //   this.pontuacao = this.pontuacao + 1;
  //   alert(this.pontuacao);
  // }

  // diminuiPontuacao() {
  //   this.pontuacao = this.pontuacao - 1;
  //   alert(this.pontuacao);
  // }

  tema: string = 'LÓGICA'

  ngOnInit() {
    localStorage.setItem('idPergunta', this.route.snapshot.params['id']);
    this.jogoService.getPerguntas(localStorage.getItem('idPergunta')).subscribe(
      data => {
        console.log(data);
        this.pergunta = data;
      }, error => console.log(error));

  this.footer.esconder();
  this.header.esconder();



}

getResultadoCerto() {
  let id = Number(localStorage.getItem('idPergunta'));
  id += 1;
  localStorage.setItem('idPergunta', String(id));

  this.router.navigate(['respostacorreta']);
}

getResultadoErrado() {
  let id = Number(localStorage.getItem('idPergunta'));
  id += 1;
  localStorage.setItem('idPergunta', String(id));

  this.router.navigate(['respostaerrada']);
}

  clickZero() {
    if (this.pergunta.respostas[0].certa)
    {
      this.getResultadoCerto();
      //this.aumentaPontuacao();
    } else {
      this.getResultadoErrado();
      //this.diminuiPontuacao();
    }
  }

  clickUm() {
    if (this.pergunta.respostas[1].certa) {
      this.getResultadoCerto();
      //this.aumentaPontuacao();
    } else {
      this.getResultadoErrado();
      //this.diminuiPontuacao();
    }
  }

  clickDois() {
    if (this.pergunta.respostas[2].certa)
    {
      this.getResultadoCerto();
      //this.aumentaPontuacao();
    } else {
      this.getResultadoErrado();
      //this.diminuiPontuacao();
    }
  }

  clickTres() {
    if (this.pergunta.respostas[3].certa)
    {
      this.getResultadoCerto();
      //this.aumentaPontuacao();
    } else {
      this.getResultadoErrado();
      //this.diminuiPontuacao();
  }
}
}
