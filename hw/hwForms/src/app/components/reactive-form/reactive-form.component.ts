import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  loginControl = new FormControl('default Login', [Validators.required, Validators.minLength(2)])
  passwordControl = new FormControl('default Password')

  FormGroup: FormGroup = new FormGroup({
    login: this.loginControl, password: this.passwordControl
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.FormGroup)
  }
}
