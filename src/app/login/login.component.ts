import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AppConstants } from '../app-constants';
import { UsersService } from '../services/users.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};

  form: FormGroup;

   
  constructor(private usersService: UsersService, private router: Router ) {}
        
  ngOnInit() {
    
    this.user = {
      email: '',
      senha: '',
    };
    
  }

  async signin(form: FormGroup) {
    
    if(form.valid) {
        try {
          const response = await this.usersService.login(this.user).toPromise();
          
          if (response['token']) {
              const token = response['token'];
              localStorage.setItem('token', token);
              this.router.navigate(['/users']);
            
              //console.log('Seu token é: '+ token);

              return;
             
          }
        } catch(error) {
          console.error(error);
        }
    }
    return alert('Login inválido !');

}
}
