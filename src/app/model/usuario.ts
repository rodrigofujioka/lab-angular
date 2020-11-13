export class Usuario {

    constructor(nome: string, email: string, cpf: string, nascimento: Date, senha: string) {
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.nascimento = nascimento;
      this.senha = senha;
    }
  
    nome: string;
    email: string;
    cpf: string;
    nascimento: Date;
    senha: string;
  }