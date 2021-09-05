import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  pais: string[]= [
    "Grecia",
    "Francia",
    "España",
    "México",
  ];

  url: string[]= [
    "https://www.google.com/search?q=grecia&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQiIrutefyAhWlRzABHYStAm4Q_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=vCU5BY4O2cbT6M&imgdii=eoGy1gahDU7CuM",
    "https://www.google.com/search?q=francia&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGiZaEtufyAhW3SjABHQXLAxQQ_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=ZBqa7cksQiJ0-M",
    "https://www.google.com/search?q=espa%C3%B1a&rlz=1C1LENN_enCO488CO488&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH8IyVtufyAhWORDABHfIAA8IQ_AUoAnoECAEQBA&biw=1366&bih=657#imgrc=NUUxsH8txvK8KM",
    "https://www.google.com/search?q=mexico+el+angel&tbm=isch&ved=2ahUKEwjSmuygtufyAhUliOAKHbkLDPEQ2-cCegQIABAA&oq=mexico+el+angel&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgYIABAFEB4yBggAEAgQHjoHCAAQsQMQQzoECAAQQ1DVgwFYj4wBYJSOAWgAcAB4AIABigKIAc8KkgEFMC44LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=6oA0YdL9IaWQgge5l7CIDw&bih=657&biw=1366&rlz=1C1LENN_enCO488CO488#imgrc=O4Gu41hT7hYiJM&imgdii=WmRYXz7vik-3mM",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
