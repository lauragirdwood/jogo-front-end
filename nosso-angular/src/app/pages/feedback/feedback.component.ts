import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  proximaPergunta() {
    this.router.navigate(['jogo/' + localStorage.getItem('idPergunta')]);
  }

}
