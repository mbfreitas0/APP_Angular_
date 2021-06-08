import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../models/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

const ApiRoutes = {
  produtos: 'produtos',
  
}

@Injectable({
  providedIn: 'root'
   
})
export class ProdutoService {

  private UrlApi: string = 'http://localhost:3000'; 

  constructor(private http: HttpClient, private toastr: ToastrService){ }

  private loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  //BUSCAR TODOS OS PRODUTOS
  public getProdutos(token: string = '') {
    
    let url = `${this.UrlApi}/${ApiRoutes.produtos}`;
    return this.http.get<Array<any>>(url, this.loadHeaders(token));
  }

  //BUSCAR O PRODUTO PELO ID
  public getProdutoId(id_produto, token: string = '') {
    
    let url = `${this.UrlApi}/${ApiRoutes.produtos}/${id_produto}`;
    return this.http.get(url, this.loadHeaders(token));
  }

  //CRIAR PRODUTO
  public create(produto: any) {

    let url = `${this.UrlApi}/${ApiRoutes.produtos}`;
    return this.http.post(url, JSON.stringify(produto), this.loadHeaders());

  }

  //DELETA UM PRODUTO
  public delete(id_produto, token: string = '') {
    
    let url: string = `${this.UrlApi}/${ApiRoutes.produtos}/${id_produto}`;
    return this.http.delete(url, this.loadHeaders(token));    
  }

  //ATUALIZAR UM PRODUTO
  public atualizar(id_produto, token: string = '') {
    
    let url: string = `${this.UrlApi}/${ApiRoutes.produtos}/${id_produto}`;
    return this.http.put(url, this.loadHeaders(token));
  }

  exibeErro(e: any):Observable <any>  {
    this.exibirMensagem('ERRO!!!','Não foi possível realizar a ação !','toastr-erro');
    return EMPTY;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true },tipo);

  }

   
  /*  private URL: string = 'http://localhost:3000/produtos';
   
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

  buscarPorId(id_produto: number, token: string): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id_produto}`,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  cadastrar(produto: IProduto, token:string): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL,produto,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

  atualizar(produto: IProduto, token:string): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id_produto}`, produto,this.loadHeaders()).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }

   */

  

  
} 