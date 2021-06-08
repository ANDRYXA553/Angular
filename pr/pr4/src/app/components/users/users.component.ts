import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../interface/userInterface";
import {UsersService} from "../../services/users.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[]
  user: UserInterface

  userHeader: string;

  constructor(private usersService: UsersService, private dataTransfer: DataTransferService) {
    dataTransfer.store.subscribe(value => {
      this.userHeader = value
    })
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  usersDetails(value: UserInterface) {
    this.user = value
  }

}
