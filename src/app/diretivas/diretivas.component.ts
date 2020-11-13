import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  carros: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  
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

}
