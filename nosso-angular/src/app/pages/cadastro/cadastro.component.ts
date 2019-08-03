import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { FooterService } from 'src/app/footer/footer.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public footer: FooterService, public header: HeaderService) { }

  ngOnInit() {
    this.footer.mostrar();
    this.header.mostrar();
  }

}
