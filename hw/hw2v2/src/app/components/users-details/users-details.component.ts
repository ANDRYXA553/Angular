import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserInterface} from "../../interface/UserInterface";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  user: UserInterface

  constructor(private router: Router,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(value => {

      this.user = this.router.getCurrentNavigation()?.extras.state as UserInterface
    })

  }

  ngOnInit(): void {
    history.state
  }

}
