import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/models/IProduto.model';
import { ProdutoService } from 'src/app/services/products.service';


@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  
  produto: IProduto = {
    
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    nome: null,
    custo: null,
    preco: null,
    qtd_estoque: null
  //imagem_produto: null,
};

constructor(
  private produtoService: ProdutoService, 
  private router: Router, 
  private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id_produto'));
    this.produtoService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno['produto'];
      console.debug();
    });
  }

  salvarProduto():void {
    this.produtoService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtoService.exibirMensagem('SISTEMA',
      `${this.produto.nome} foi atualizado com sucesso.`,
      `toast-success`);
      this.router.navigate(['/produtos']);
    });

  }
}
