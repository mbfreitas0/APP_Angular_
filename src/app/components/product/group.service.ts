import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from '../product/group.model';


@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  baseUrl = 'http://localhost:3000/groups';

  constructor(private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }

      // Headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }
  read(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl);

  }
}
