import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor() { }
/* 
   /*  consultaCEP(cep: string) {
      let cep = this.formulario.get('endereco.cep').value;
      
        if(cep != null && cep !== '') { 
          this.cepService.consultaCEP(cep);
        }

      //Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');
      //Verifica se o campo cep possui valor informado.
      if(cep !== '') {
        //Expressão regular para validar o CEP.
        const validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          return this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
            dados => this.populaDadosForm(dados)); */
          
        }
