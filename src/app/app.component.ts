import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './auth/user-auth.service';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sportivo';
  loggedIn:boolean=false;
  constructor(private log:UserAuthService)
  {

  }
  ngOnInit()
  {

   
      

  }
  logIn()
  {
    this.log.loggedIn=true;
    this.loggedIn=this.log.loggedIn
  }
}

