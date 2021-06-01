import {Component, OnInit} from '@angular/core';
import {UsersFetcherService} from "../../services/users-fetcher.service";
import {UserInterface} from "../../interface/UserInterface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[]

  constructor(private usersFetcher: UsersFetcherService) {

  }

  ngOnInit(): void {
    this.usersFetcher.getUsers().subscribe(value => {
      this.users = value
    })
  }

}
