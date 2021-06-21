import { IProduto } from './../models/IProduto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private loadHeaders(token: string = '') { 
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  // BUSCAR TODOS PRODUTOS
  buscarTodosProdutos(): Observable<IProduto[]> {
    
    return this.http.get<IProduto[]>( this.URL ).pipe(
       map(retorno => retorno),
       catchError(erro => this.exibeErro(erro))
    ); 

  }

  // GRAVAR PRODUTO

  cadastrarProduto(produto: IProduto) {
    
    let url = `${this.URL}`;

    return this.http.post(url, JSON.stringify(produto), this.loadHeaders());
   
   
    /* return this.http.post<IProduto>( this.URL, produto) ).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro)) 

    );*/
       
  }

  /* cadastrarProduto(produto: IProduto) {

    let url = `${this.URL}`;

    return this.http.post(url, JSON.stringify(produto), this.loadHeaders());

  } */

  
  

  /* cadastrarProduto(produto: IProduto) {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
   );  
      
  }; */

  exibeErro(e: any): Observable<any> {
     this.exibirMensagem ('ERRO !!!  ', 'Não foi possível realizar a operação !', 'toastr-error');
     return EMPTY;
  };

  exibirMensagem(titulo:string, mensagem:string, tipo:string): void {
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true}, tipo);
  };
}