import { LojaService } from './../loja.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-produto',
  templateUrl: './adiciona-produto.component.html',
  styleUrls: ['./adiciona-produto.component.css']
})
export class AdicionaProdutoComponent implements OnInit {

  constructor(private loja: LojaService) { }

  ngOnInit(): void {
    let produto = {
      "id": 15,
      "nome": "Aspirador de pó",
      "descricao": "Aspirador",
      "preco": 999.78,
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3862RkSDGn9IY4ZxwUyoGsFeErBRT_1TaI1hFBHBgzsd7gOE4jITQnrw8mGuxThbGIg-vKI&usqp=CAc",
      "estoque": 100
  };
    this.loja.adicionarProduto(produto).subscribe(
      res => 
      console.log(res));
  }
}
