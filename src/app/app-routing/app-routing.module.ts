import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    
  { path:'', component: LoginComponent  },
  { path:'users', canActivate:[AuthGuardService], component: UsersComponent },
  { path:'/register', component: RegisterComponent },

  

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
