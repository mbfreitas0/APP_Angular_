import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<any> = [];
  private token = `bearer ${localStorage.getItem('token')}`;

  constructor(private router: Router, private usersService: UsersService) { }

  async ngOnInit() {

      try {

        const results = await this.usersService.getUsers(this.token).toPromise();
      
        this.users = results;
        console.log(this.users);
     
      }catch (error) {

        localStorage.removeItem('token');
        this.router.navigate(['/']);
        
      } 
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); 
  }
  
  public delete(id_usuario) {

    this.usersService.delete(id_usuario, this.token).subscribe(rs => {
     console.log(rs);
      this.users = this.users.filter(user => id_usuario != user.id_usuario);
        if(this.users.length < 1) {
          localStorage.removeItem('token');
            this.router.navigate(['/'])

      }
    });
  }
}

