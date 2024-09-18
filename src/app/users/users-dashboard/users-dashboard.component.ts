import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Iusers } from '../../interface/i-users';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    )
    }
   
    selectedUser: Iusers = {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    }

    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website']
    users: Iusers[]= []

  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => {
        this.users= response
        console.log(this.users)
      }
    )

  }

  addUser(user: Iusers): void{
    this.users.push(user);
    console.log(this.users);
  }
}
