import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminform:FormGroup
  user:any
  messege:any
  constructor(private _UserAuthService:UserAuthService,private router :Router) { }

  ngOnInit(): void {
    this.adminform=new FormGroup({
      'email':new FormControl(null,Validators.required),
     'password':new FormControl(null,Validators.required)
    })
  }

  onLogin()
  {
    if(!this.adminform.valid)
    {
      return
    }
    this._UserAuthService.login(this.adminform.value).subscribe(result=>{
     if(result.user.role=="admin")
     {
      
       
        this._UserAuthService.token=result.token;
      this._UserAuthService.loggedIn.next(result.user);
      this._UserAuthService.saveToLocal(result.token,result.user);
      this.router.navigate(['Cpanal']);
      
     }
     else
     {
       this.messege="you are not allow to login "
     }
    },err=>{
      this.messege="Wrong email / password "
    })
  }

}
