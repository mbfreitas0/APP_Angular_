import { Component, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoService } from '../services/products.service';
import { IProduto } from '../models/IProduto.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  preserveWhitespaces:true

})
export class ProductComponent implements OnInit {

  listaProdutos: IProduto[] = [];
  private token = `bearer ${localStorage.getItem('token')}`;
    
  constructor( private produtoService: ProdutoService, private router: ActivatedRoute ) {
      
  }  
  
  ngOnInit() { 
    this.carregarProdutos();
  }

  carregarProdutos(): void {

    try {
      
      this.produtoService.buscarTodos().subscribe(retorno => {
        this.listaProdutos = retorno['produtos'];
        console.log('<IProduto>', retorno);
      });


    } catch (error) {

      localStorage.removeItem('token');
        this.router.(['/']);
      
    }


  }

  
   
  

  

}
