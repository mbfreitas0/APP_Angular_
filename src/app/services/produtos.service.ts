
import { IProduto } from './../models/IProduto.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, catchError, retry, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000';
  private ENDPOINT: string = 'products';


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `${token}`
    });
    return { headers };
  }

  // BUSCAR TODOS PRODUTOS
  public getProducts(token: string = '') {
    let url = `${this.URL}/${this.ENDPOINT}`;
    return this.http.get<IProduto[]>(url, this.loadHeaders(token));
    catchError(erro => this.exibeErro(erro));

  }
  /*  buscarTodosProdutos(): Observable<IProduto[]> {
     //console.log('buscarProdutos ' + JSON.stringify(produto));
     return this.http.get<IProduto[]>(`${this.URL}/${this.ENDPOINT}` ).pipe(
       map(retorno => retorno),
       catchError(erro => this.exibeErro(erro))
       //catchError(this.handleError)
     );
 
   } */
  // BUSCAR PRODUTO PELO ID

  public getProductById(id: number, token: string = ''): Observable<IProduto> {

    return this.http.get<IProduto>(`${this.URL}/${this.ENDPOINT}/${id}`, this.loadHeaders(token))
      .pipe(
        retry(2),
        catchError(erro => this.exibeErro(erro))
      )
  }
  
  /* public getProductById(id, token: string = '') {
    let url = `${this.URL}/${this.ENDPOINT}/${id}`;
    return this.http.get<IProduto>(url, this.loadHeaders(token));
    catchError(erro => this.exibeErro(erro));
  } */

  /* buscarPorId(id: number): Observable<IProduto> {
    //console.log('buscarPorId ' + JSON.stringify(produto));
    return this.http.get<IProduto>(`${this.URL}/${this.ENDPOINT}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
      //catchError(this.handleError)

    );

  } */

  // ATUALIZAR PRODUTO

  update(produto: IProduto, token: string = ''): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${this.ENDPOINT}/${produto.id}`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(erro => this.exibeErro(erro))
      )
  }

  /* public update(produto: IProduto, token: string = '') {
    let url: string = `${this.URL}/${this.ENDPOINT}/${produto.id}`;
    return this.http.put(url, JSON.stringify(produto), this.loadHeaders(token));
    catchError(erro => this.exibeErro(erro));
  } */

  /* atualizarProduto(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(this.URL + '/' + this.ENDPOINT +'/'+ produto.id, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  } */

  /* atualizarProduto(produto: IProduto): Observable<IProduto> {
   console.log('atualizarProduto ' + JSON.stringify(produto));
   return this.http.put<IProduto>(`${this.URL}/${this.ENDPOINT}/${produto.id}`, produto).pipe(
     map(retorno => retorno),
     catchError(erro => this.exibeErro(erro)) */

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  /* atualizarProduto(produto: IProduto): Observable<IProduto> {
  return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto)
    .pipe(
      catchError(erro => this.exibeErro(erro))
    );
} */

  // GRAVAR PRODUTO
  public create(produto: IProduto, token: string = '') {
    let url = `${this.URL}/${this.ENDPOINT}`;
    return this.http.post(url, JSON.stringify(produto), this.loadHeaders());
    catchError(erro => this.exibeErro(erro));
  }

  /* cadastrarProduto(produto: IProduto): Observable<IProduto> {
    console.log('cadastrarProduto ' + JSON.stringify(produto));
    return this.http.post<IProduto>(`${this.URL}/${this.ENDPOINT}$/${produto.id}`,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
      //catchError(this.handleError)

    );

  } */


  // DELETAR PRODUTO
  public delete(id, token: string = '') {
    let url = `${this.URL}/${this.ENDPOINT}`;
    return this.http.delete(url, this.loadHeaders(token));
    catchError(erro => this.exibeErro(erro));
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem('ERRO !!!  ', 'Não foi possível realizar a operação !', 'toastr-error');
    return EMPTY;
  };

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  };


}
  /* deletarProduto(produto: IProduto) {
console.log('deletarProduto ' + JSON.stringify(produto));
return this.http.delete<IProduto>(`${this.URL}/${this.ENDPOINT}/${produto.id}`).pipe(
catchError(erro => this.exibeErro(erro))
//catchError(this.handleError)
);

} */

/* // Manipulação de erros
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}; */