import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatTable, MatTableDataSource } from '@angular/material/table';
//import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';
//import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  //product: Product = {} as Product;
  products: Product[];
  
  displayedColumns = ['id', 'status', 'descricao', 'id_locacao', 'estoque_min', 'estoque_max', 'action'];
   
  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {

    this.productService.read().subscribe(products => {
      this.products = products;
    }) 

  }
  
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
