import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user:any = [];
  //public user: any = {};
  //public user:any = null;
  private token = `bearer ${localStorage.getItem('token')}`;

constructor(private router: ActivatedRoute, private userService: UsersService) { }


  async ngOnInit() {

    this.user = {
      id_usuario: null,
      email: '',
      senha: ''
    };

    this.router.params.subscribe(param => {
      let id = param.id_usuario;
      console.log("Seu ID eh: " + id);

      this.userService.getUser(id, this.token).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    });

    
    }
    async onSave(form: FormGroup) {
      if (form.valid) {
      
        try {

          const response = await this.userService.update(this.user, this.token).toPromise();
          if(response==1) {
            console.log("Ok !");
          }
          
          
        } catch (error) {
          console.log(error);
        }
       
      }
       return alert ('Dados não foram atualizados !');
    }
      
}

