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
export class CadastrarProdutosComponent implements OnInit {

  private token = `bearer ${localStorage.getItem('token')}`;

  //*** DECLARAÇÃO DAS VARIÁVEIS *** //

  produto: IProduto = {
    id_grupo: null,
    id_marca: null,
    id_locacao: null,
    nome: null,
    preco: null,
    custo: null,
    qtd_estoque: null,
    imagem_produto:null,

  };

  constructor(private formBuilder: FormBuilder, private produtosService: ProdutosService, private router: Router) { }

  addForm: FormGroup;

   ngOnInit() {

    this.addForm = this.formBuilder.group({
      id_produto: [],
      id_grupo: ['', Validators.required],
      id_marca: ['', Validators.required],
      id_locacao: ['', Validators.required],
      nome: ['', Validators.required],
      custo: ['', Validators.required],
      preco: ['', Validators.required],
      qtd_estoque: ['', Validators.required],
      imagem_produto: ['', Validators.required]
    });

  }

  salvarProduto( ) {

    this.produtosService.cadastrarProduto(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['produtos/listar-produtos']);
    });
  }

}

