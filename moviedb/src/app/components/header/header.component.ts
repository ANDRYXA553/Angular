import {Component, OnInit} from '@angular/core';
import {document} from "ngx-bootstrap/utils";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themeName = 'Black'

  themeColor=window.localStorage.getItem('ColorBlack')

  constructor() {
  }

  ngOnInit(): void {
  }

  themeChanger(target:any) {
    if (target.checked) {
      document.body.classList.remove('black')
      document.body.classList.add('grey')
      this.themeName='Grey'
      window.localStorage.setItem('ColorBlack','false')
    } else {
      document.body.classList.remove('grey')
      document.body.classList.add('black')
      this.themeName='Black'
      window.localStorage.setItem('ColorBlack','true')
    }
  }

}
