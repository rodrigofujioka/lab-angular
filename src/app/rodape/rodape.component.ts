import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  
  public githubUrl = 'https://github.com/rodrigofujioka/lab-angular';
  public imgUrl = 'https://www.fujideia.com.br/fuji/papw/fujioka.png';
  public headerFooter = 'Aula do Fuji';
  public altText = 'Uma imagem';
  
  constructor() { }

  ngOnInit(): void {
  }

}
