import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../../../interfaces/UserInterface";
import {UsersService} from "../../../services/users/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[]

  constructor(private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoutes.data.subscribe(value => {

      this.users = value.data
    })
  }

}
