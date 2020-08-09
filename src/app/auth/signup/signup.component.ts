import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userForm=new FormGroup({

    'firstName':new FormControl(null,Validators.required),
    'lastName':new FormControl(null,Validators.required),
    'email':new FormControl(null,Validators.required),
    'userPassword':new FormControl(null,Validators.required),
    'confirmPassword':new FormControl(null,Validators.required,),
    'age':new FormControl(null,Validators.required),

  })
  constructor(private router:Router, private actvatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSignUp()

  {
    const d= new Date(this.userForm.get("age").value)
    console.log(2020-d.getFullYear())
    if(this.userForm.valid && (this.userForm.get("userPassword").value === this.userForm.get("confirmPassword").value))
    {
      console.log("hi")
    }
    else{
      console.log("not hi")
    }
    
  }

  

}
