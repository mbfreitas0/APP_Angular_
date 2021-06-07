import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { ProductComponent } from '../product/product.component';
import { CadastrarProdutoComponent } from '../product/cadastrar-produto/cadastrar-produto.component';
import { DetailsProdComponent } from '../details-prod/details-prod.component';
import { AtualizarProdutoComponent } from '../product/atualizar-produto/atualizar-produto.component';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    
  { path:'', component: LoginComponent  },
  { path:'users', canActivate:[AuthGuardService], component: UsersComponent },
  { path:'/register', component: RegisterComponent },
  { path:'header', component: HeaderComponent },
  { path:'product',canActivate:[AuthGuardService], component: ProductComponent },
  { path:'product/cadastrar', canActivate:[AuthGuardService],component: CadastrarProdutoComponent },
  { path:'product/atualizar/:id_produto', canActivate:[AuthGuardService],component: AtualizarProdutoComponent },
  { path:'details-prod', component: DetailsProdComponent } 

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
