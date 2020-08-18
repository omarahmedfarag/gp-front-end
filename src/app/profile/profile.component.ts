import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from './aggrement/request.service';
import { AppliedRequestService } from './request/applied-request.service';
import { PlcaeServiceService } from '../owner/plcae-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any
  request:any
  userForm:FormGroup;
  image:string='';
  updatedImage:boolean=false;
  aggrement:boolean
  checkPlace:any
  constructor(private auth:UserAuthService,
    private _RequestService:RequestService,
    private _AppliedRequestService:AppliedRequestService,
    private _PlcaeServiceService:PlcaeServiceService
    ) { }

  ngOnInit(){
    this.auth.getMe()
    this._RequestService.aggrement.subscribe(result=>{
      this.aggrement= result
    })
    this.auth.loggedIn.subscribe(user=>{
      this.user=user;
    })
   
    this._PlcaeServiceService.getMyPlace().subscribe((result)=>{
      this.checkPlace=result.place
      console.log(this.checkPlace)
      
    })
    this._AppliedRequestService.getMyRequest().subscribe(result=>{
      this.request=result.request.length == 0 ? false :result.request 
      console.log(this.request)
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
