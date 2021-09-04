import { Component, OnInit, HostListener, HostBinding} from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent implements OnInit {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor='green';
  }
  @HostBinding('style.backgroundColor') backgroundColor = "red"; 
  
 
  constructor() { }

  ngOnInit(): void {

  }

}
