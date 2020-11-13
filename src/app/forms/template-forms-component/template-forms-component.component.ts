import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-component',
  templateUrl: './template-forms-component.component.html',
  styleUrls: ['./template-forms-component.component.css']
})
export class TemplateFormsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados = `
    firstName: ${form.value.firstName}
    lastName: ${form.value.lastName}
    Phone: ${form.value.phone}
    Cpf: ${form.value.cpf}
    Login: ${form.value.login}
    Pass: ${form.value.pass}
    `;

 
    console.log(dados);      
  }

}
