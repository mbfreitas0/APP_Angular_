import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/models/IProduto.model';
import { ProdutoService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

    produto: IProduto = {
         id_grupo: null,
         id_marca: null,
         id_locacao: null,
         nome: null,
         custo: null,
         preco: null,
         qtd_estoque: null,
       //imagem_produto: null,
    };

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }
  
  salvarProduto():void {
    this.produtoService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtoService.exibirMensagem('SISTEMA',
      `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id_produto}`,
      `toast-success`);
      this.router.navigate(['/produtos']);
    });
    
  }

}
