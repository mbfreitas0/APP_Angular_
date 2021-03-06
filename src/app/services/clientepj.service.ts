import { IClientepj } from './../models/IClientepj.model';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientepjService {

  private URL: string = 'http://localhost:3000/clientepj';

  constructor( private http: HttpClient, private toastr: ToastrService) { }

  private loadHeaders(token: string = '') { 
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  // BUSCAR TODOS CLIENTES
  buscarTodos(): Observable<IClientepj[]> {

    return this.http.get<IClientepj[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }
  // BUSCAR CLIENTE PELO ID
  buscarPorId(id: number): Observable<IClientepj> {

    return this.http.get<IClientepj>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),

      catchError(erro => this.exibeErro(erro))

    );

  }

  // GRAVAR CLIENTE
  cadastrar(cliente: IClientepj): Observable<IClientepj> {

    return this.http.post<IClientepj>(this.URL, cliente).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))

    );

  }

  // ALTERAR Cliente
  alterar(cliente: IClientepj) {

    return this.http.put<IClientepj>(this.URL + cliente.id, cliente).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))

    );

  }

  // DELETAR Cliente
  deletar(cliente: IClientepj) {

    return this.http.delete<IClientepj>(this.URL + cliente.id);
    catchError(erro => this.exibeErro(erro))

  }
    
  exibeErro(e: any): Observable<any> {
     this.exibirMensagem ('ERRO !!!  ', 'Não foi possível realizar a operação !', 'toastr-error');
     return EMPTY;
  };

  exibirMensagem(titulo:string, mensagem:string, tipo:string): void {
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true}, tipo);
  };
}
