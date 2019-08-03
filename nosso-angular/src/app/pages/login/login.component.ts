import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { HeaderService } from 'src/app/header/header.service';
import { FooterService } from 'src/app/footer/footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public footer: FooterService, public header: HeaderService) { }

  ngOnInit() {
    this.footer.mostrar();
    this.header.mostrar();
  }

}
