import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ MatSnackBar }from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/products';  


  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
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
  return this.http.get<Product[]>(this.baseUrl);
  }
}    
