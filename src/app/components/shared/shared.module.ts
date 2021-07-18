import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { DropdownService } from '../../services/dropdown.service';



@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CardProdutoComponent],

  providers:[DropdownService] 
})
export class SharedModule { }
