import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respostacorreta',
  templateUrl: './respostacorreta.component.html',
  styleUrls: ['./respostacorreta.component.css']
})
export class RespostacorretaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  proximaPergunta() {
    this.router.navigate(['jogo/' + localStorage.getItem('idPergunta')]);
  }

}