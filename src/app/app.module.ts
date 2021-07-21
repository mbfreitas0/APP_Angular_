import { Interceptor } from './services/interceptor';
//import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
//import { AuthGuardService } from './guard/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import { DropdownService } from './services/dropdown.service';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    UserDetailsComponent,
    UppercaseDirective,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
        
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
    Interceptor,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  

  exports:[
    AppComponent,
    
  ],
    
  providers: [DropdownService],
  //providers: [AuthGuardService, DropdownService],
  bootstrap: [AppComponent]
  /* providers: [AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent] */
})
export class AppModule { }
