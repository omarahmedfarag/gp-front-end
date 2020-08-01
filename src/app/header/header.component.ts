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
  
  @ViewChild(LoginComponent) LoginComponent:LoginComponent;
  constructor(private log:UserAuthService,private router:Router,private activeRouter:ActivatedRoute)
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

        
    this.log.loggedIn.subscribe(loggedin=>{this.loggedIn=loggedin})
      

  }
  onLogin()
  {

    console.log(this.LoginComponent)
    $(".login-comp-contianer").css({"display":"block"})
    this.router.navigate(["user/login"])


  }
  close()
  {
    $(".login-comp-contianer").css({"display":"none"})
  }

  logOut()
  {
    this.log.loggedIn.next(false);
    this.router.navigate(["/Home"],{relativeTo:this.activeRouter})
  }

}
