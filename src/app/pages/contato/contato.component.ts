import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { FooterService } from 'src/app/footer/footer.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(public footer: FooterService, public header: HeaderService) { }

  ngOnInit() {
    this.footer.mostrar();
    this.header.mostrar();
  }

}