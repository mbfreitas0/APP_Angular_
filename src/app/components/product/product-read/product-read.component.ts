import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  
  displayedColumns = ['id', 'id_grupo', 'id_marca', 'id_locacao' , 'status' ,'descricao', 'estoque_min', 'estoque_max'];

  constructor(private productServe: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  readProduct(): void {
    this.productServe.read().subscribe(products =>{
      this.products = products['products']
      console.log(products);
    })
    

  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
