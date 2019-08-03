import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { FooterService } from 'src/app/footer/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public footer: FooterService, public header: HeaderService) { }

  ngOnInit() {
    this.footer.mostrar();
    this.header.mostrar();
  }

  scrollToElement($element){
    console.log($element)
    $element.scrollInToView({behavior: "smooth", block: "start", inline: "nearest"});

  }

}
