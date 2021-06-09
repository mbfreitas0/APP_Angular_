import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public id_usuario = null;
  private token = `bearer ${localStorage.getItem('token')}`;

  constructor(private router: ActivatedRoute) { }

  async ngOnInit() {

    try {
      this.id_usuario = await this.router.params.toPromise();
      console.log("ID: " + this.id_usuario);

    } catch (error) {
      
    }
  }

}
