import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iusers } from '../../interface/i-users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']})
export class EditUserFormComponent {

  @Input()user :Iusers={
    id: 0,
    name: "",
    username:"",
    email: "",
    phone: "",
    website: ""
  }

  @Input() disabled: boolean = true

  @Output() eventEmitter = new EventEmitter<Iusers>()
  
  constructor(private _service: UserService){
    // this._service.get().subscribe(
    //   response => this.user =response
    // )
  }
  mostrar(): void{
    this.eventEmitter.emit(this.user);
    console.log(this.user.name)
    console.log(this.user)
  }

}