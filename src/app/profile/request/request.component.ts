import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/main_places/place/place.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  placeTypes:string[];
  gocernate:any
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  requestState:boolean=false
  isEditable = false;
  image:string='';
  constructor(private _formBuilder: FormBuilder,private _PlaceService:PlaceService) { }

  ngOnInit(): void {

    this.placeTypes= this._PlaceService.placeTypes;
    this.gocernate= this._PlaceService.gocernate;

    this.firstFormGroup = this._formBuilder.group({
      placeType: ['', Validators.required],
       governrate: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      wait: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      documentPhoto: ['', Validators.required]
    });
    

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
    console.log(this.firstFormGroup)
  }



}
