import {Component, OnInit} from '@angular/core';
import {JogoService} from "./jogo.service";
import {Pergunta} from "../pergunta/pergunta";
import {ActivatedRoute, Router} from "@angular/router";
import {Resposta} from "../pergunta/resposta";

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  pergunta: Pergunta;
  pontuacao: string = localStorage.getItem('pontuação');

  constructor(private jogoService: JogoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    localStorage.setItem('idPergunta', this.route.snapshot.params['id']);
    this.jogoService.getPerguntas(localStorage.getItem('idPergunta')).subscribe(
      data => {
        console.log(data);
        this.pergunta = data;
      }, error => console.log(error));
  }

  aumentaPontuacao() {
    this.pontuacao = String(localStorage.getItem('pontuação'));
    this.pontuacao += 1;
    localStorage.setItem('pontuação', String(this.pontuacao));
  }

  diminuiPontuacao() {
    this.pontuacao = String(localStorage.getItem('pontuação'));
    localStorage.setItem('pontuação', String(this.pontuacao));
  }

  getResultadoCerto() {
    let id = Number(localStorage.getItem('idPergunta'));
    id += 1;
    localStorage.setItem('idPergunta', String(id));

    this.router.navigate(['feedback']);
  }

  getResultadoErrado() {
    let id = Number(localStorage.getItem('idPergunta'));
    id += 1;
    localStorage.setItem('idPergunta', String(id));

    this.router.navigate(['feedback']);
  }

  clickZero() {
    if (this.pergunta.respostas[0].certa)
    {
      alert("achou certo otario");
      this.getResultadoCerto();
      this.aumentaPontuacao();
    } else {
      alert("achou errado otario");
      this.getResultadoErrado();
      this.diminuiPontuacao();
    }
  }

  clickUm() {
    if (this.pergunta.respostas[1].certa) {
      alert("achou certo otario");
      this.getResultadoCerto();
      this.aumentaPontuacao();
    }
     else {
      alert("achou errado otario");
      this.getResultadoErrado();
      this.diminuiPontuacao();
    }
  }

  clickDois() {
    if (this.pergunta.respostas[2].certa)
    {
      alert("achou certo otario");
      this.getResultadoCerto();
      this.aumentaPontuacao();
    } else {
      alert("achou errado otario");
      this.getResultadoErrado();
      this.diminuiPontuacao();
    }
  }

  clickTres() {
    if (this.pergunta.respostas[3].certa)
    {
      alert("achou certo otario");
      this.getResultadoCerto();
      this.aumentaPontuacao();
    } else {
      alert("achou errado otario");
      this.getResultadoErrado();
      this.diminuiPontuacao();
    }
  }
}
