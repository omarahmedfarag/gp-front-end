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
    'userName':new FormControl(null,Validators.required),
    'userPassword':new FormControl(null,Validators.required)
  })
  mode:string="register"
  constructor(private _UserAuthService:UserAuthService,private router:Router,private avtivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // get prameter from the url to know if user want to login or register
    this.avtivatedRoute.params.subscribe((param:Params)=>{
     this.mode=param["registerMode"];
    })

  }
  onLogin(){


    this._UserAuthService.loggedIn.next(true);
    this.router.navigate(['Home'])

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
