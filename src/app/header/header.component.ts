import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';
import { LoginComponent } from '../auth/login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
declare const $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'sportivo';
  loggedIn:boolean=false;
  user:any
  
  constructor(private _UserAuthService:UserAuthService,private router:Router,private activeRouter:ActivatedRoute)
  {

    /*
    $(window).scroll(()=>{
      if($(window).scrollTop()>100)
      {
        $(".navbar").addClass("onscroll-nav")
      }
      else{
        $(".navbar").removeClass("onscroll-nav")
      }
    })
    */

  }
  ngOnInit()
  {

        
    this._UserAuthService.loggedIn.subscribe(user=>{
     if(!user)
     {
       this.loggedIn=false;
     }
     else{
       this.loggedIn=true;
       this.user=user;
     }

    })
      

  }
  onLogin()
  {

    $(".login-comp-contianer").css({"display":"block"})
    this.router.navigate(["account/login"])


  }
  close()
  {
    $(".login-comp-contianer").css({"display":"none"})
  }

  logOut()
  {
    this._UserAuthService.logOut();
    this.router.navigate(["/Home"],{relativeTo:this.activeRouter})
  }

}
