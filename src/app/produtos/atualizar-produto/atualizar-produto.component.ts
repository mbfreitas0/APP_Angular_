import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IProduto } from './../../models/IProduto.model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  private token = `bearer ${localStorage.getItem('token')}`;

  //*** DECLARAÇÃO DAS VARIÁVEIS *** //

  produto = {} as IProduto;

  /* produto: IProduto = {
    id: null,
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    status: null,
    descricao: null,
    estoque_min: null,
    estoque_max: null
                               
} */

  constructor(
    private produtosService: ProdutosService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute) { }

    ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this.produtosService.buscarPorId(id).subscribe(retorno => {
          this.produto = retorno['produto'];
      });

    }



  salvarProduto( ) {

    
      this.produtosService.atualizarProduto(this.produto).subscribe( retorno => {
        this.produto = retorno;
          this.produtosService.exibirMensagem(
          'SISTEMA',
          `${this.produto.descricao} foi atualizado com sucesso.`,
          'toast-success' 
        );
        this.router.navigate(['produtos/listar-produtos']);
    });
      
    
  }

}
