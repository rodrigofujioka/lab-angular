import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador = 0;
  @Input() value = 'Texto passado' ;

  constructor() { }

  ngOnInit(): void {
  }

  contarClique(){
    this.contador = this.contador + 1;
    //this.contador++;
  }

}
