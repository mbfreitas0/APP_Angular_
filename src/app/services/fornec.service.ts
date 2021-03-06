import { IFornecedor } from './../models/IFornecedores.model';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private URL: string = 'http://localhost:3000/fornecedores';

  constructor( private http: HttpClient, private toastr: ToastrService) { }

  private loadHeaders(token: string = '') { 
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  // BUSCAR TODOS FORNECEDORES
  buscarTodos(): Observable<IFornecedor[]> {

    return this.http.get<IFornecedor[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }
  // BUSCAR FORNECEDOR PELO ID
  buscarPorId(id: number): Observable<IFornecedor> {

    return this.http.get<IFornecedor>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),

      catchError(erro => this.exibeErro(erro))

    );

  }

  // GRAVAR FORNECEDOR
  cadastrar(fornecedor: IFornecedor): Observable<IFornecedor> {

    return this.http.post<IFornecedor>(this.URL, fornecedor).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))

    );

  }

  // ALTERAR FORNECEDOR
  alterar(fornecedor: IFornecedor): Observable<IFornecedor>{
    
      return this.http.put<IFornecedor>(`${this.URL}/${fornecedor.id}`, fornecedor).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))

    );

  }

  // DELETAR FORNECEDOR
  deletar(fornecedor: IFornecedor) {

    return this.http.delete<IFornecedor>(this.URL + fornecedor.id);
    catchError(erro => this.exibeErro(erro))

  }
    
  exibeErro(e: any): Observable<any> {
     this.exibirMensagem ('ERRO !!!  ', 'Não foi possível realizar a operação ! ', 'toastr-error');
     return EMPTY;
  };

  exibirMensagem(titulo:string, mensagem:string, tipo:string): void {
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true}, tipo);
  };
}
