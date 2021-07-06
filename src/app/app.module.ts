import { ActivatedRoute } from '@angular/router';
import { TokenInterceptor } from './services/interceptor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'  

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from '../app/users/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutoComponent } from './produtos/atualizar-produto/atualizar-produto.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import { CadastrarFornecComponent } from './fornecedores/cadastrar-fornec/cadastrar-fornec.component';
import { CadastrarClientesComponent } from './clientes/cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarClientepjComponent } from './clientepj/cadastrar-clientepj/cadastrar-clientepj.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    UserDetailsComponent,
    HomeComponent,
    ListarProdutosComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
    UppercaseDirective,
    CadastrarFornecComponent,
    CadastrarClientesComponent,
    CadastrarClientepjComponent
      

    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
    
  ],

  exports:[
    AppComponent,
    
  ],
    
  providers: [AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
