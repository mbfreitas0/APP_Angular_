import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ MatSnackBar }from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/produtos';


  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }

    // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition:"top",
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl)
  .pipe(
    retry(2),
      catchError(this.handleError)
  )

  }


  // Manipulação de erros
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
  };

}
   
