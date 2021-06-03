import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../../../interfaces/UserInterface";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[]

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value
    })
  }

}
