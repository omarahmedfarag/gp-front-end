import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/main_places/place/place.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {

  created:boolean=false
  loading=false;
  user:any=false
  Governorates:any;
  errorMesseg:any
  public userForm=new FormGroup({

    'firstName':new FormControl(null,Validators.required),
    'lastName':new FormControl(null,Validators.required),
    'email':new FormControl(null,Validators.required),
    'password':new FormControl(null,Validators.required),
    'confirmPassword':new FormControl(null,Validators.required,),
    'age':new FormControl(null,Validators.required),
    "address":new FormControl(null,Validators.required),

  })
  constructor(private _UserAuthService:UserAuthService,private router:Router, private actvatedRoute:ActivatedRoute,private _PlaceService:PlaceService) { }

  ngOnInit() {
    this.Governorates=this._PlaceService.gocernate;
    this._UserAuthService.loggedIn.subscribe((user)=>{
      this.loading=true
      this.user=user
      this.loading=false
      console.log(this.user)
    })
  }
  onSignUp()
  {
    

    if(this.userForm.get("password").value != this.userForm.get("confirmPassword").value)
    {
      this.errorMesseg="two passwords don't match"
      return
    }
    let d:any= new Date(this.userForm.get("age").value)
    d=2020-d.getFullYear()
    const user ={...this.userForm.value}
    user["age"]=d
    delete user["confirmPassword"]

    this._UserAuthService.signUp(user).subscribe(result=>{
      this._UserAuthService.token=result.token;
      this._UserAuthService.loggedIn.next(result.user);
      this._UserAuthService.saveToLocal(result.token,result.user);
      this.errorMesseg=''
    },(err)=>{
      console.log(err)
        if(err.error.Error.errors.email)
        {
          this.errorMesseg="Email should be uniqe *this email already signed up"
        }
        if(err.error.Error.errors.password)
        {
          this.errorMesseg=" password is weak should me more than 8 numbers "
        }
    })
    
    

  }

  

}
