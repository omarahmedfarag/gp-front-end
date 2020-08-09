import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from './aggrement/request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any
  userForm:FormGroup;
  image:string='';
  updatedImage:boolean=false;
  aggrement:boolean
  constructor(private auth:UserAuthService,private _RequestService:RequestService) { }

  ngOnInit(){

    this._RequestService.aggrement.subscribe(result=>{
      this.aggrement= result
    })
    this.auth.loggedIn.subscribe(user=>{
      this.user=user;
    })
   
    this.userForm=new FormGroup({
      "photo":new FormControl(null)
    })


  }
  onImagePicked(event:Event)
  {
    const userimage = (event.target as HTMLInputElement).files[0];
    this.userForm.patchValue({"photo":userimage});
    this.userForm.get("photo").updateValueAndValidity();
        
        const reader=new FileReader();
        reader.onload=()=>{
          this.image=(reader.result as string);
          this.updatedImage=true;
        }
        reader.readAsDataURL(userimage);

        
  }
  submitImage()
  {
    this.auth.updatedImage(this.user._id,this.userForm.get("photo").value)
  }
  

}
