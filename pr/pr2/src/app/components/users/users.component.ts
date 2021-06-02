import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserInterface} from "../../interfaces/UserInterface";

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
