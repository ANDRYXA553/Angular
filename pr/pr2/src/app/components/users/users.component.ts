import {Component, OnInit} from '@angular/core';
import {UsersFetchService} from "../services/users-fetch.service";
import {UserInterface} from "../../interfaces/UserInterface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[]

  constructor(private fetchUsers: UsersFetchService) {
  }

  ngOnInit(): void {
    this.fetchUsers.getUsers().subscribe(value => {
      this.users = value
    })
  }

}
