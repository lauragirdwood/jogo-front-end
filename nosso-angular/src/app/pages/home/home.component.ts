import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element){
    console.log($element)
    $element.scrollInToView({behavior: "smooth", block: "start", inline: "nearest"});

  }

}
