import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-imagem',
  templateUrl: './exibe-imagem.component.html',
  styleUrls: ['./exibe-imagem.component.css']
})
export class ExibeImagemComponent implements OnInit {

  public imgUrl = 'https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png';
  public exibe = false;
  constructor() { }

  ngOnInit(): void {
  }

  public exibeImagem(){
    this.exibe = !this.exibe;
  }

}
