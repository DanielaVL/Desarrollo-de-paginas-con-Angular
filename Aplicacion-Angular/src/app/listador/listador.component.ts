import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  paises: string[]= [
    "Grecia",
    "Francia",
    "Estados Unidos",
    "España",
    "México",
    "Chile",
    "Argentina",
    "Italia",
    "Alemania"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
