import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public imgPerfil = "https://www.fujideia.com.br/fuji/papw/fujioka.png";
  
  public usuario = "Rodrigo Fujioka";

  public exibe = false;
  
  public lista = [
    {
      id: '1',
      year:'2007',
      cert: 'SCJP 1.5',
    },
    {
      id: '2',
      year:'2009',
      cert: 'SCWCD 1.5',
    },
    {
      id: '3',
      year:'2011',
      cert: 'CTFL',
    }];

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil(){
    this.exibe = !this.exibe;
  }

}
