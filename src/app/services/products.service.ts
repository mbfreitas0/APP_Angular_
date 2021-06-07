import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../models/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
   
})
export class ProdutoService {


  private URL: string = 'http://localhost:3000/produtos';
   
  constructor( private http: HttpClient, private toastr: ToastrService ){ }

  private loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  buscarPorId(id_produto: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id_produto}`,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL,produto,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  atualizar(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id_produto}`, produto,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  exibeErro(e: any):Observable <any>  {
    this.exibirMensagem('ERRO!!!','Não foi possível realizar a ação !','toastr-erro');
    return EMPTY;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true },tipo);

  }

  

  
} 