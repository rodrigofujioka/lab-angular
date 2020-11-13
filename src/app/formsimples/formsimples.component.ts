import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formsimples',
  templateUrl: './formsimples.component.html',
  styleUrls: ['./formsimples.component.css']
})
export class FormsimplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
      let dados = `
        Nome: ${form.value.nome}
        Idade: ${form.value.idade}      
      `;

    console.log(dados);
  }

}
