import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CanActivate } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { UsersComponent } from '../components/users/users.component';
//import { AuthGuardService } from '../guard/auth-guard.service';
import { RegisterComponent } from '../components/register/register.component';
import { UserDetailsComponent } from '../components/users/user-details/user-details.component';



const routes: Routes = [
    
  
  { path:'login', component: LoginComponent  },
  { path:'users', component: UsersComponent },
  { path:'users/:id_usuario', component: UserDetailsComponent },
  { path:'register', component: RegisterComponent },
  
  //{ path:'clientepj/atualizar/:id',component: AtualizarClientepjComponent},
  
  //{ path:'clientes/atualizar/:id', component: AtualizarClientesComponent  },
  
  
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
