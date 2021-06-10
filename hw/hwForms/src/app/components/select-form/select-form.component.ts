import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserInterface} from "../users/interface/user";
import {UsersService} from "../users/services/users.service";

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {

  users: UserInterface[]


  formGroup = new FormGroup({
    user: new FormControl('')
  })

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  showUser(value: FormGroup) {
    console.log(value.controls.user.value)
  }
}
