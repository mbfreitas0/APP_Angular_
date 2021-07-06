import { UppercaseDirective } from './../../directives/uppercase.directive';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutosService } from './../../services/produtos.service';
import { IProduto } from './../../models/IProduto.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  private token = `bearer ${localStorage.getItem('token')}`;

  //*** DECLARAÇÃO DAS VARIÁVEIS *** //

  produto: IProduto = {
    
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    status: null,
    descricao: null,
    estoque_min: null,
    estoque_max: null
                               
}

  constructor(private produtosService: ProdutosService, private router: Router) { }

    ngOnInit(): void {

    }

  salvarProduto( ):void {

    
      this.produtosService.cadastrarProduto(this.produto).subscribe( retorno => {
        this.produto = retorno;
          this.produtosService.exibirMensagem(
          'SISTEMA',
          `${this.produto.descricao} foi cadastrado com sucesso. ID: ${this.produto.id}`,
          'toast-success' 
        );
        this.router.navigate(['produtos/listar-produtos']);
    });
      
    
  }

}

