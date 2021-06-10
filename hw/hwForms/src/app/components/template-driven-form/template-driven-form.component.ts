import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: { login?: string, password?: string } = {login:'LOGIN',password:'PASSWORD'}

  constructor() {
  }

  ngOnInit(): void {
  }
  submit(value:NgForm):void{

    console.log(value)
  }
}
