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
  checkPasswords:boolean=false
  constructor(private auth:UserAuthService) { }

  ngOnInit(){

    this.userForm=new FormGroup({
      "firstName":new FormControl(null),
      "lastName":new FormControl(null),
      "age":new FormControl(null),
      "currentPassword":new FormControl(null),
      "newPassword":new FormControl(null),
      "confirmPassword":new FormControl(null),
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
  updateAge()
  {
    let d:any= new Date(this.userForm.get("age").value)
    d=2020-d.getFullYear()
    const user={age:d};
    this.auth.updatedUserInfo(this.user._id,user);
  }
  changePassword()
  {
    if(this.userForm.get("newPassword").value,this.userForm.get("confirmPassword").value)
    {
      const passwords={
      currentPassword:this.userForm.get("currentPassword").value,
      newPassword:this.userForm.get("newPassword").value
      
    }
    this.auth.updatedUserInfo(this.user._id,passwords)
    }
    else
    {
      this.checkPasswords=true
    }
  }
}
