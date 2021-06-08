import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../../../interface/userInterface";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input()
  user: UserInterface


  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {

  }

  showUserInHead() {
    this.dataTransfer.store.next(this.user.name)
  }


}
