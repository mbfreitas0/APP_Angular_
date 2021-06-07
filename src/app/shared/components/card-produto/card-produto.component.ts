import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() nome: string;
  @Input() id_grupo: number;
  @Input() id_marca: number;
  @Input() id_locacao: number;
  @Input() preco: number;
  @Input() custo: number;
  @Input() qtd_estoque: number;
  @Input() imagem_produto: string;

  constructor() { }

  ngOnInit(): void {
  }

}
