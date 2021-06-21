import { IProduto } from './../../models/IProduto.model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: IProduto[] = []; 
  //listaStrings: string[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  
  carregarProdutos(): void {
    this.produtosService.buscarTodosProdutos().subscribe(retorno => {
      this.listaProdutos = retorno;
    });
  }
}
