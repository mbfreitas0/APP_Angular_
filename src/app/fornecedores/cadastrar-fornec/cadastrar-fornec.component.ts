import { FornecedoresService } from './../../services/fornec.service';
import { IFornecedor } from './../../models/IFornecedores.model';
import { Component, OnInit } from '@angular/core';
import { UppercaseDirective } from './../../directives/uppercase.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-fornec',
  templateUrl: './cadastrar-fornec.component.html',
  styleUrls: ['./cadastrar-fornec.component.css']
})
export class CadastrarFornecComponent implements OnInit {

  private token = `bearer ${localStorage.getItem('token')}`;

  //*** DECLARAÇÃO DAS VARIÁVEIS *** //

  fornecedor: IFornecedor = {
        
    nome: null,
    endereco: null,
    cep: null,
    cidade: null,
    uf: null,
    telefone: null,
    cnpj: null,
    ie: null,
    email: null,

  }
  constructor( 
    private fornecedoresService:FornecedoresService,
    private router: Router,
    
    ) { }

  ngOnInit(): void {
  }
  salvarFornecedor( ):void {

    
    this.fornecedoresService.cadastrar(this.fornecedor).subscribe( retorno => {
      this.fornecedor = retorno['fornecedores'];
        this.fornecedoresService.exibirMensagem(
        'SISTEMA',
        `${this.fornecedor.nome} foi cadastrado com sucesso. ID: ${this.fornecedor.id}`,
        'toast-success' 
      );
      this.router.navigate(['fornecedores/listar-fornecedores']);
  });
    
  
}

}


