import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserInterface} from "../../../interfaces/UserInterface";
import {UsersFetchService} from "../../services/users-fetch.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserInterface

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fetchUser: UsersFetchService) {

    this.activatedRoute.params.subscribe(value => {

      this.fetchUser.getUser(value.id).subscribe(value1 => {
        this.user = value1
      })
    })
  }


  ngOnInit() {

  }

}
