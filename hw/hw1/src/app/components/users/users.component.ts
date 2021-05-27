import {Component, OnInit} from '@angular/core';
import {User} from "../models/userInterface";
import {UsersFetchService} from "../../../services/users-fetch.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]

  constructor(private usersFetch: UsersFetchService) {
  }

  ngOnInit(): void {
    this.usersFetch.getUsers().subscribe(value => {
      this.users = value
    })

  }

}
