import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = {};

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {

    this.user = {
      
      email:      '',
      senha:      '',
    };
  }

  async signup(form: FormGroup) {

    if(form.valid) {

      try {

        const response = await this.usersService.create(this.user).toPromise();

        //localStorage.removeItem('token');

          this.router.navigate(['/login']);

          return alert("Usuário Criado com Sucesso !");
        
      } catch (error) {

        console.error(error)
       
      }

    }
    return alert("Dados inválidos !");

  }

}
