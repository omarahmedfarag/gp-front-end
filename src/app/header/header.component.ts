import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';
declare const $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'sportivo';
  loggedIn:boolean=false;
  constructor(private log:UserAuthService)
  {

    $(window).scroll(()=>{
      if($(window).scrollTop()>100)
      {
        $(".navbar").addClass("onscroll-nav")
      }
      else{
        $(".navbar").removeClass("onscroll-nav")
      }
    })

  }
  ngOnInit()
  {

    
     
    
    this.log.loggedIn.subscribe(loggedin=>{this.loggedIn=loggedin})
      

  }
  logIn()
  {
    this.log.loggedIn.next(true);
    
  }
  logOut()
  {
    this.log.loggedIn.next(false);
  }

}
