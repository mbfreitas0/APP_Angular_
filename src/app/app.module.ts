import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'  
import { ProdutoService } from '../app/services/products.service';

import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailsProdComponent } from './details-prod/details-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { CadastrarProdutoComponent } from './product/cadastrar-produto/cadastrar-produto.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AtualizarProdutoComponent } from './product/atualizar-produto/atualizar-produto.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    LayoutComponent,
    DetailsProdComponent,
    EditProdComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent
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
    HeaderComponent,
    ProductComponent,
    LayoutComponent,
    DetailsProdComponent
  ],
    
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
