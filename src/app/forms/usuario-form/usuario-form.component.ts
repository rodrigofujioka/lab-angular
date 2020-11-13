import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CpfUtil } from 'src/app/util/cpfUtil';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  formUsuario : FormGroup;

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }


  criarFormularioDeUsuario() {
    this.formUsuario = this.fb.group({
      nome: [
        '',
          Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(150)
        ])
      ],
      email: ['', Validators.compose([Validators.email])],
      cpf: ['', Validators.compose([Validators.required, CpfUtil.ValidaCpf])],
      nascimento: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required])],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    });
  }



  onSubmit() {
    const dadosFormulario = this.formUsuario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );

    alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.formUsuario.reset();
  }


  public get nome() {
    return this.formUsuario.get('nome');
  }

  get email() {
    return this.formUsuario.get('email');
  }

  get cpf() {
    return this.formUsuario.get('cpf');
  }

  get nascimento() {
    return this.formUsuario.get('nascimento');
  }

  get senha() {
    return this.formUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formUsuario.get('confirmarSenha');
  }
}
