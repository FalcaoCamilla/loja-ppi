import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LojaService } from '../model/loja.service';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-exibe-produto',
  templateUrl: './exibe-produto.component.html',
  styleUrls: ['./exibe-produto.component.css']
})
export class ExibeProdutoComponent implements OnInit {

  produtos: Produto[];
  preco: Array<any>;
  msg: string;

  public consultaForm: FormGroup = this.form.group({
    //id: ['', [Validators.maxLength(5), Validators.required]],
  })

  constructor(private loja: LojaService, private form: FormBuilder) {
    this.produtos = [];
    this.preco = [];
    this.msg = '';
  }

  ngOnInit(): void {

  }

  exibirProdutos(id: string){
    this.loja.exibirProduto(id).subscribe(res => {
      this.produtos = res
    });
  }

  exibirPreco(id: number){
    this.loja.exibirPreco(id).subscribe(res => {
      this.preco = res
      this.msg = `O item custa ${this.preco}`
    });
  }
}
