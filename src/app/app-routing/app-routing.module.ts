import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { RegisterComponent } from '../register/register.component';
import { UserDetailsComponent } from '../users/user-details/user-details.component';

const routes: Routes = [
    
  { path:'', component: RegisterComponent  },
  { path:'login', component: LoginComponent  },
  { path:'users', canActivate:[AuthGuardService], component: UsersComponent },
  { path:'users/:id_usuario', canActivate:[AuthGuardService], component: UserDetailsComponent },
  { path:'register', component: RegisterComponent },

  

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
