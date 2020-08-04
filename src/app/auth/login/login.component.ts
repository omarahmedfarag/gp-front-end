import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm=new FormGroup({
    'email':new FormControl(null,Validators.required),
    'password':new FormControl(null,Validators.required)
  })
  
  constructor(private _UserAuthService:UserAuthService,private router:Router,private avtivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // get prameter from the url to know if user want to login or register
    

  }
  onLogin(){


    if(!this.userForm.valid)
    {
      return
    }
    console.log(this.userForm.value);
    this._UserAuthService.loggedIn.next(true);
    this._UserAuthService.login(this.userForm.value)
    this.router.navigate(['Home']);

  }
  close()
  {
    $(".main").css({"display":"none"})

  }
  //we acces it from header component
  show()
  { 
    $(".main").css({"display":"flex"})

  }



}
