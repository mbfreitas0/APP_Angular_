import { Interceptor } from './../../services/interceptor';
import { FornecedoresService } from './../../services/fornec.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IFornecedor } from './../../models/IFornecedores.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-atualizar-fornec',
  templateUrl: './atualizar-fornec.component.html',
  styleUrls: ['./atualizar-fornec.component.css']
})
export class AtualizarFornecComponent implements OnInit {
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
    private fornecedoresService: FornecedoresService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute) { }

    ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this.fornecedoresService.buscarPorId(id).subscribe(retorno => {
          this.fornecedor = retorno['fornecedor'];
      });

    }

  salvarFornecedor( ):void {

    
      this.fornecedoresService.alterar(this.fornecedor).subscribe( retorno => {
       this.fornecedor = retorno;
        console.log(retorno);
          this.fornecedoresService.exibirMensagem(
          'SISTEMA',
          `${this.fornecedor.nome} foi atualizado com sucesso.`,
          'toast-success' 
        );
        this.router.navigate(['fornecedores/listar-fornec']);
    });
      
    
  }

}
