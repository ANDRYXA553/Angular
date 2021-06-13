import {Component, OnInit} from '@angular/core';
import {document} from "ngx-bootstrap/utils";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themeName = 'Black'

  themeColor :boolean

  constructor() {
  }

  ngOnInit(): void {

  }


  themeChanger(target: any) {
    if (target.checked) {
      document.body.classList.remove('black')
      document.body.classList.add('grey')
      this.themeName = 'Grey'

      // window.localStorage.setItem('ColorBlack', 'false')
    } else {
      document.body.classList.remove('grey')
      document.body.classList.add('black')
      this.themeName = 'Black'
      this.themeColor=false
    }
  }

}
