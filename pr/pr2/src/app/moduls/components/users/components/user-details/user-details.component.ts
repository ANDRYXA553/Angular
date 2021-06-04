import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserInterface} from "../../../../../interfaces/UserInterface";
import {UserService} from "../../../../services/users/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserInterface

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUser(value.id).subscribe(value1 => {
        this.user = value1
      })
    })
  }


  ngOnInit() {

  }

}
