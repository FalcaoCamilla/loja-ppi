import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  adicionarProduto(prod: Produto): Observable<any> {
    return this.http.post(`${this.URL}/produtos`,
    prod);
  }

  exibirProduto(id: string): Observable<any>{
    return this.http.get(`${this.URL}/produtos/${id}`)
  }

  exibirPreco(id: number): Observable<any>{
    return this.http.get(`${this.URL}/produtos/${id}/preco`)
  }
}
