import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, take, tap } from 'rxjs/operators';
import { Product } from './Product.model';

// Headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

const baseUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${baseUrl}`, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  /* read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);

  } */

  getProductById(id: number): Observable<Product> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /*getProductById  (): Observable<Product[]> {
    const url = `${baseUrl}/${id}`; 
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>('get case id'))
    ) */

  /* public readByID(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  } */

  /* readByID(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url);

  }; */

  updateProduct(id: any, product: Product): Observable<any> {
    const url = `${baseUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /*  update(id: number, data: any){
     return this.http.put(`${this.baseUrl}/${id}`, data);
   } */

  /* update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product);

  }; */



  // Manipulação de erros
  /* handleError(error: HttpErrorResponse) {
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
}
