import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './auth/user-auth.service';
import { NgwWowService } from 'ngx-wow';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private _UserAuthService:UserAuthService,private wowService: NgwWowService)
  {
    this.wowService.init();
  }
  ngOnInit()
  {
    
    this._UserAuthService.loadUserFromLocalStorage();

  }
  scrollTop()
  {

    $("html,body").animate({
      scrollTop:0
    },1000)
  }
 
}

