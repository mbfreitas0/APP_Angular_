import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const ApiRoutes = {

  login:    'login',
  signup:   'cadastro',
  users:    'usuarios',
};

   @Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UrlApi: string = 'http://localhost:3000/usuarios';

  //URL exclusiva dos users//
  private UrlUser: string = 'http://localhost:3000';

   
  constructor(private http: HttpClient, private router: Router) { }

  private loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  // LOGIN NO APP
  public login(user: any) {

    let url = `${this.UrlApi}/${ApiRoutes.login}`;

    return this.http.post(url, JSON.stringify(user), this.loadHeaders());
  }

  // BUSCAR TODOS USUARIOS
  public getUsers(token: string = '') {

    let url = `${this.UrlUser}/${ApiRoutes.users}`;

    return this.http.get<Array<any>>(url, this.loadHeaders(token));

  }

  // CRIAR USUARIO
  public create(user: any) {

    let url = `${this.UrlApi}/${ApiRoutes.signup}`;

    return this.http.post(url, JSON.stringify(user), this.loadHeaders());

  }

  // DELETAR USUARIOS
  public delete(id_usuario, token: string = '') {

    let url: string = `${this.UrlUser}/${ApiRoutes.users}/${id_usuario}`;

    return this.http.delete(url, this.loadHeaders(token));
  }   
}



