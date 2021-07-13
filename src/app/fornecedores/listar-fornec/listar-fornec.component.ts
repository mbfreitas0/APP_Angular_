import { IFornecedor } from './../../models/IFornecedores.model';
import { FornecedoresService } from './../../services/fornec.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-fornec',
  templateUrl: './listar-fornec.component.html',
  styleUrls: ['./listar-fornec.component.css']
})
export class ListarFornecComponent implements OnInit {
  
//  private token = `bearer ${localStorage.getItem('token')}`;

  listaFornecedores: IFornecedor[] = []; 
  //listaStrings: string[] = [];

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit(): void {
    this.carregarFornecedores();
  }
  
  carregarFornecedores(): void {
    this.fornecedoresService.buscarTodos().subscribe(retorno => {
      this.listaFornecedores = retorno['fornecedores'];
    });
  }
}
