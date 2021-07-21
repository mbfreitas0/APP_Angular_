import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    status: null,
    descricao: null,
    estoque_min: null,
    estoque_max:null
  }


  constructor(private productServe: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productServe.create(this.product).subscribe(() =>{
      this.productServe.showMessage('Produto criado com sucesso !');
      this.router.navigate(['/products']);
    })
    

  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
