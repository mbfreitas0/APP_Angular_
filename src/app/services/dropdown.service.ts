import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IGrupo } from '../models/IGrupo.model';
import { ILocacao } from '../models/ILocacao.model';
import { IMarca } from '../models/IMarca.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  private loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':`${token}`
    });
    return { headers };
  }

  getGrupo(token: string = '') {
    return this.http.get<IGrupo>('assets/dropdown/grupo.json', this.loadHeaders(token)).pipe();
  }
  
  getMarca(token: string = '') {
    return this.http.get<IMarca>('assets/dropdown/marca.json', this.loadHeaders(token)).pipe();
   }

   getLocacao(token: string = '') {
    return this.http.get<ILocacao>('assets/dropdown/locacao.json', this.loadHeaders(token)).pipe();
   }
} 
