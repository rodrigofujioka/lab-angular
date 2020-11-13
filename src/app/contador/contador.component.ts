import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador = 0;
  public imgUrl = 'https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png';

  constructor() { }

  ngOnInit(): void {
  }

  contarClique(){
    this.contador = this.contador + 1;
    //this.contador++;
  }

}
