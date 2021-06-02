import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr2';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  showPosts():void {
    this.router.navigate(['posts'])
  }
  showUsers():void {
    this.router.navigate(['users'])
  }
  showComments():void{
    this.router.navigate(['comments'])
  }
}
