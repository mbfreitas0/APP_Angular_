import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../product/group.model';
import { Brand } from '../product/brand.model';
import { Location } from '../product/location.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  // Headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getGrupo() {
    return this.http.get<Group[]>('assets/dropdown/grupo/grupo.json');
      
    };

  getMarca() {
    return this.http.get<Brand[]>('assets/dropdown/marca/marca.json');
    
  };

  getLocacao() {
    return this.http.get<Location[]>('assets/dropdown/locacao/locacao.json');
    
  };
}

