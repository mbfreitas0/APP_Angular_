import { FormGroup } from '@angular/forms';
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

  constructor(private produtosService: ProdutosService, private router: Router) { }

   ngOnInit():void {
  }

  async salvarProduto(form: FormGroup) {

    if(form.valid) {

      try {

        const response = await this.produtosService.cadastrarProduto(this.produto).toPromise();
          const token = response['token'];
            localStorage.getItem('token');  
              this.router.navigate(['/produtos/listar-produtos']);
        return alert("Produto Criado com Sucesso !"); 
  
      } catch (error) {
        console.error(error)
   
      }

    }
    return alert("Dados inválidos !");

  }

}
  

  /*salvarProduto(): void {
    this.produtosService.cadastrarProduto(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem('SISTEMA',`${this.produto.nome} foi cadastrado com sucesso. ID ${this.produto.id_produto}`,
      'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
} */
  
   /*  */

/*
criarUsuario(usuario: UsuariosModel){
  return this.httpClient.post(`${API}Usuarios`, user, this.httpOptions)
}

*/

    


