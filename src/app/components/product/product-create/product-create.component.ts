import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from '../dropdown.service';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';
import { Brand } from '../brand.model';
import { Group } from '../group.model';
import { Location } from '../location.model';
//import { MatSelectModule } from '@angular/material/select';
//import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formProduct: FormGroup;

  //Variável Interface
  marcas: Observable<Brand[]>;
  grupos: Observable<Group[]>;
  locacaos: Observable<Location[]>;

  product: Product;

 /*  product: Product = {
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    status: '',
    descricao: '',
    estoque_min: null,
    estoque_max: null
  } */


  constructor(
    private http: HttpClient,
    private productServe: ProductService,
    private router: Router,
    private dropdownService: DropdownService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.grupos = this.dropdownService.getGrupo();
    this.locacaos = this.dropdownService.getLocacao();
    this.marcas = this.dropdownService.getMarca();
 
  }
  createForm() {
    this.formProduct = this.fb.group({
      id_grupo: [null],
      id_marca: [null],
      id_locacao: [null],
      status: [''],
      descricao: [''],
      estoque_min: [null],
      estoque_max: [null]
    });
  }
  
  onSubmit(): void {
   this.productServe.create(this.formProduct.value).subscribe(resposta => {
     this.product = resposta;
     
   })
   }
 
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
