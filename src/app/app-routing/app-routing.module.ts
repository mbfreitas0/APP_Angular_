import { AtualizarProdutoComponent } from './../produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarProdutoComponent } from './../produtos/cadastrar-produtos/cadastrar-produtos.component';
import { ListarProdutosComponent } from './../produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { RegisterComponent } from '../register/register.component';
import { UserDetailsComponent } from '../users/user-details/user-details.component';

const routes: Routes = [
    
  { path:'', component: HomeComponent  },
  { path:'home', component: HomeComponent  },
  { path:'login', component: LoginComponent  },
  { path:'users', component: UsersComponent },
  { path:'users/:id_usuario', component: UserDetailsComponent },
  { path:'register', component: RegisterComponent },
  { path:'produtos/listar-produtos',component: ListarProdutosComponent  },
  { path:'produtos/atualizar/:id',component: AtualizarProdutoComponent},
  { path:'produtos/cadastrar', component: CadastrarProdutoComponent  },
  
  /* { path:'', canActivate:[AuthGuardService],component: HomeComponent  },
  { path:'home', canActivate:[AuthGuardService],component: HomeComponent  },
  { path:'login', component: LoginComponent  },
  { path:'users', canActivate:[AuthGuardService], component: UsersComponent },
  { path:'users/:id_usuario', canActivate:[AuthGuardService], component: UserDetailsComponent },
  { path:'register', component: RegisterComponent },
  { path:'produtos/listar-produtos', canActivate:[AuthGuardService],component: ListarProdutosComponent  },
  { path:'produtos/cadastrar', canActivate:[AuthGuardService],component: CadastrarProdutosComponent  }, */


  

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
