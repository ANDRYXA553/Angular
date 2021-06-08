import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserInterface} from "../../../interface/userInterface";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user: UserInterface

  @Output()
  lift = new EventEmitter()


  constructor() {
  }

  ngOnInit(): void {
  }

  userDetails(): void {
    this.lift.emit(this.user)
  }

}
