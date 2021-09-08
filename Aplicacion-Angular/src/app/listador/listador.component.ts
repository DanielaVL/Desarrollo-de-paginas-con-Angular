import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  paises: string[]= [
    "Grecia",
    "Francia",
    "España",
    "México",
  ];

  urls: string[]= [
    "https://www.google.com/search?q=grecia&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQiIrutefyAhWlRzABHYStAm4Q_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=vCU5BY4O2cbT6M&imgdii=eoGy1gahDU7CuM",
    "https://www.google.com/search?q=francia&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGiZaEtufyAhW3SjABHQXLAxQQ_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=ZBqa7cksQiJ0-M",
    "https://www.google.com/search?q=espa%C3%B1a&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH8IyVtufyAhWORDABHfIAA8IQ_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=NUUxsH8txvK8KM",
    "https://www.google.com/search?q=mexico+el+angel&tbm=isch&ved=2ahUKEwjSmuygtufyAhUliOAKHbkLDPEQ2-cCegQIABAA&oq=mexico+el+angel&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgYIABAFEB4yBggAEAgQHjoHCAAQsQMQQzoECAAQQ1DVgwFYj4wBYJSOAWgAcAB4AIABigKIAc8KkgEFMC44LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6oA0YdL9IaWQgge5l7CIDw&bih=657&biw=1366&rlz=1C1LENN_enCO488CO488#imgrc=O4Gu41hT7hYiJM&imgdii=WmRYXz7vik-3mM",
  ];

  //constructor() {}

  /*ngOnInit(): void {

    /*Esto es una plantilla de lo que pasaría al dar click en el botón "Aceptar" pero no lo sé usar,
      quería usar una función llamada "paísEnLaLista" y claramente no usaría valores quemados 
      sino los input "destino" y "url" 
    
    console.log(this.paises)
    const newCountry='Brasil';
    const newUrl='https://www.google.com/search?q=brasil&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJk63p6OjyAhV-SjABHXKKDCwQ_AUoAXoECAEQAw&biw=1366&bih=657#imgrc=TQSWXHq2Wnn6lM&imgdii=niKtqQISkAWgnM'
    console.log(newCountry)
    if(!this.paises.includes(newCountry)){
      this.paises.push(newCountry)
      this.urls.push(newUrl)
    }
    console.log(this.paises)*/

  destinos: DestinoViaje[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit():void {
  }

  aceptar(nombre:string, url:string):boolean {
    if(nombre==="" || url===""){
      alert("Debes rellenar los campos para continuar");
      return true;
    }else{
      this.destinos.push(new DestinoViaje(nombre, url));
      console.log(this.destinos);
      return false;
    }
  }

} 
