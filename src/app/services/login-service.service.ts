import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const ApiRoutes = {
  login:    'login',
  signup:   'signup',
  signout:  'signout',
  user:     'user',

};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private UrlApi: string = 'http://localhost:3000/usuarios';


  constructor(private http: HttpClient, private router: Router) { }

  public login(user: any){
    
    let url = `${this.UrlApi}/${ApiRoutes.login}`;

    return this.http.post(url, JSON.stringify(user), this.loadHeaders() );
  }
  

  private loadHeaders(token: string = '') {

      let headers = new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':`${token}`
      });
      return { headers };
  }
}  
 
