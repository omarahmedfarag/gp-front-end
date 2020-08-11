import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/main_places/place/place.service';
import { AppliedRequestService } from './applied-request.service';
import { UserAuthService } from 'src/app/auth/user-auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  placeTypes:string[];
  gocernate:any
  areas:any

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  requestState:boolean=false
  isEditable = false;
  image:string='';

  user:any
  myRequest:any=false
  constructor(
    private _formBuilder: FormBuilder,
    private _PlaceService:PlaceService,
    private _AppliedRequestService:AppliedRequestService,
    private _UserAuthService:UserAuthService
    ) { }

  ngOnInit(): void {


    this._UserAuthService.loggedIn.subscribe(user=>{
      this.user=user
    })
    this.placeTypes= this._PlaceService.placeTypes;
    this.gocernate= this._PlaceService.gocernate;
    
    this.firstFormGroup = this._formBuilder.group({
      placeName: ['', Validators.required],
      placeType: ['', Validators.required],
      governorate: ['', Validators.required],
      areas:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      wait: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      documentPhoto: ['', Validators.required]
    });


    this._AppliedRequestService.getMyRequest().subscribe((result)=>{
      this.myRequest=result.request.length == 0 ? false :result.request 
      console.log("wow")
      console.log(this.myRequest)
    },err=>{
      console.log(err)
    })

    

  }

  onImagePicked(event:any)
  {
    const userimage = (event.target as HTMLInputElement).files[0];
    this.thirdFormGroup.patchValue({"documentPhoto":userimage});
    this.thirdFormGroup.get("documentPhoto").updateValueAndValidity();
        
        const reader=new FileReader();
        reader.onload=()=>{
          this.image=(reader.result as string);
        }
        reader.readAsDataURL(userimage);

  }
  onSubmit()
  {
    var formData = new FormData(); 
    formData.append('placeName', this.firstFormGroup.get("placeName").value);
    formData.append('placeType', this.firstFormGroup.get("placeType").value);
    formData.append('governorate', this.firstFormGroup.get("governorate").value);
    formData.append('area', this.firstFormGroup.get("areas").value);
    formData.append('documentPhoto', this.thirdFormGroup.get("documentPhoto").value);
    console.log(formData.get("documentPhoto"))
    
    this._AppliedRequestService.postRequest(formData).subscribe((result)=>{
      console.log(result)
    },err=>{
      console.log(err);
    })
    

  }

  onCitySelected()
  {
   
    let areasCode=this.firstFormGroup.get("governorate").value.replace(/ /g,"_");
    this.areas=this._PlaceService.areas[areasCode]
  }


}
