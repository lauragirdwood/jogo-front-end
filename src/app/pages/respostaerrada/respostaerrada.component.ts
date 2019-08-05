import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respostaerrada',
  templateUrl: './respostaerrada.component.html',
  styleUrls: ['./respostaerrada.component.css']
})
export class RespostaerradaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  proximaPergunta() {
    this.router.navigate(['jogo/' + localStorage.getItem('idPergunta')]);
  }

}