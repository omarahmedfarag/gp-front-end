import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  alertUserMessege=""
  user:any
  userForm:FormGroup
  constructor(private auth:UserAuthService) { }

  ngOnInit(){

    this.userForm=new FormGroup({
      "firstName":new FormControl(null),
      "lastName":new FormControl(null),
      "age":new FormControl(null)
    })


    this.auth.loggedIn.subscribe(user=>{
      this.user=user;
    })
  }
  updatedNames()
  {
    let userNames;
    if(this.userForm.value.firstName==null && this.userForm.value.lasttName!=null)
    {
      userNames={lastName:this.userForm.value.lastName};
      console.log("first if")

    }
    if(this.userForm.value.firstName==null && this.userForm.value.lastName==null)
    {
      userNames={firstName:this.userForm.value.firstName};
      console.log("second if")
    }
    if(this.userForm.value.firstName==null && this.userForm.value.lastName==null)
    {
      this.alertUserMessege="you should submit atleast one name"
      return;
    }
    if(this.userForm.value.firstName!=null && this.userForm.value.lastName!=null)
    {
      userNames={firstName:this.userForm.value.firstName,lastName:this.userForm.value.lastName}
      console.log("last if")
    }
    this.alertUserMessege="updated Suuccesfuly"
    this.auth.updatedUserInfo(this.user._id,userNames);
  }

}
