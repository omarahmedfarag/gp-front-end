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
  loading=false;
  warrningMessege="";
  public userForm=new FormGroup({
    'email':new FormControl(null,Validators.required),
    'password':new FormControl(null,Validators.required)
  })
  
  constructor(private _UserAuthService:UserAuthService,private router:Router,private avtivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // get prameter from the url to know if user want to login or register
    

  }
  onLogin(){

    this.loading=true
  //    console.log(this._UserAuthService.login(this.userForm.value));
    if(!this.userForm.valid)
    {
      return
    }
    this._UserAuthService.login(this.userForm.value).subscribe(result=>{
      this._UserAuthService.token=result.token;
      this._UserAuthService.loggedIn.next(result.user);
      this._UserAuthService.saveToLocal(result.token,result.user);
      this.router.navigate(['Home']);
      
    },err=>{
      this.warrningMessege=err.error.Erorr
      this.loading=false
    })
    
    

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
