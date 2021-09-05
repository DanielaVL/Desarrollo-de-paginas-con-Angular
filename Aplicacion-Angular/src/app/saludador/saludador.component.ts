import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent implements OnInit {
  @HostBinding('style.color') color= 'black'; 

  @HostListener('mouseenter')
  mouseHover(eventData: Event) {
    this.color= 'red';
  }
  constructor() { }

  ngOnInit(): void {

  }
}
