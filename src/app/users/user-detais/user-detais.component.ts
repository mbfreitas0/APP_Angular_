import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detais',
  templateUrl: './user-detais.component.html',
  styleUrls: ['./user-detais.component.css']
})
export class UserDetaisComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  private Id = null;
  private token = `bearer ${localStorage.getItem('token')}`;

  async ngOnInit() {

    this.router.params.subscribe(param => {
      
    });
  }

}
