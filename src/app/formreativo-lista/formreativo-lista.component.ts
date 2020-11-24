import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formreativo-lista',
  templateUrl: './formreativo-lista.component.html',
  styleUrls: ['./formreativo-lista.component.css']
})
export class FormreativoListaComponent implements OnInit {

  contatos: Contato[];

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

     // Chama o serviço para obtém todos os usuários
     getContatos() {
      this.formService.getContatos().subscribe((contatos: Contato[]) => {
        this.contatos = contatos;
      });
    }
  
    
      
    // carrega tela para cadastro de um usuário
    createAgenda() {
      this.formService.createContato().subscribe(() => {
        this.getContatos();
      });
    }

}
