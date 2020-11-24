import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../contato';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formsimples',
  templateUrl: './formsimples.component.html',
  styleUrls: ['./formsimples.component.css']
})
export class FormsimplesComponent implements OnInit {

  contato = {} as Contato;
  
  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
      let dados = `
        Nome: ${form.value.nome}
        Idade: ${form.value.idade}      
      `;

    console.log(dados);
  }

  // defini se um usuário será criado ou atualizado
  saveContato(form: NgForm) {    
    console.log(this.contato);
    this.formService.saveContato(this.contato).subscribe(() => {
      this.cleanForm(form);
    });
  
  }

    // limpa o formulario
    cleanForm(form: NgForm) {  
      form.resetForm();
      this.contato = {} as Contato;      
    }

}
