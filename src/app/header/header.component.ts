import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Declaração das Variáveis

  id_produto: number;
  id_grupo: number;
  id_marca: number;
  id_locacao: number;
  nome: string;
  custo: number;
  preco: number
  qtd_estoque: number
  imagem_produto: string;  

  constructor() { 
    console.log('ID: ',this.id_produto);
    console.log('Nome do produto: ',this.nome);
    console.log('Grupo: ',this.id_grupo);
    console.log('Marca: ',this.id_marca);
    console.log('Locação: ',this.id_locacao);
    console.log('Preço de Custo: ',this.custo);
    console.log('Preço do produto: ',this.preco);
    console.log('Quantidade em estoque: ',this.qtd_estoque);
    console.log('Imagem: ',this.imagem_produto);

  }
 

  ngOnInit() {
    
  }
}   
  

