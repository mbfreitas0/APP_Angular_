import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const ApiRoutes = {

  login:  'login',
  signup: 'create',
  users:  'users',
};

   @Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UrlUser: string = 'http://localhost:3000/users';

  //URL exclusiva dos users//
  private UrlApi: string = 'http://localhost:3000';

   
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

    let url = `${this.UrlUser}/${ApiRoutes.login}`;

    return this.http.post(url, JSON.stringify(user), this.loadHeaders());
    
  }

  // BUSCAR TODOS USUARIOS
  public getUsers(token: string = '') {

    let url = `${this.UrlUser}`;

    return this.http.get<Array<any>>(url, this.loadHeaders(token));

  }

  // BUSCAR USUARIO PELO ID
  public getUser(id_usuario, token: string = '') {

    let url = `${this.UrlUser}/${id_usuario}`;

    return this.http.get<any>(url, this.loadHeaders(token));

  }

  // CRIAR USUARIO
  public create(user: any) {

    let url = `${this.UrlUser}/${ApiRoutes.signup}`;

    return this.http.post(url, JSON.stringify(user), this.loadHeaders());

  }

  // UPDATE USUARIO
  public update(user:any, token: string = '') {

    let url: string = `${this.UrlUser}/${user.id}`;

    return this.http.put(url,JSON.stringify(user), this.loadHeaders(token));
  }

  // DELETAR USUARIOS
  public delete(id, token: string = '') {

    let url: string = `${this.UrlUser}/${id}`;

    return this.http.delete(url, this.loadHeaders(token));
  }
  
  
}



