import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  
  public githubUrl = 'https://github.com/rodrigofujioka/lab-angular';
  public imgSimbling = 'https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png';
  public headerFooter = 'Aula do Fuji';
  public altText = 'Uma imagem';
  
  constructor() { }

  ngOnInit(): void {
  }

}
