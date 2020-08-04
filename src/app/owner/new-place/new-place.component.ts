import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArrayName, FormArray } from '@angular/forms';
import { mimeType } from './mime-type-validator';
import {HttpClient} from "@angular/common/http"
import { from } from 'rxjs';
import { PlcaeServiceService } from '../plcae-service.service';

declare const $:any;
@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {
  Governorates: string[]=['Cairo','Giza','kal','Alexandria',
  'Aswan','Asyut','Beheira','Beni','Cairo','Dakahlia'];
  placeTypes:string[]=['GYM','TENNES','FOOTBALL','BASCKETBALL','SWIMMING','STREETWORKOUT'];
  pricePerArr:string[]=["hour",'lesson','day',"week","month"]
  placeForm:FormGroup;
  mainImage:string;
  optinalImage:string;
  optinalImages:string[]=[null,null,null];
  showOptinalImagesRow:boolean=false;
  allPlaces:any[];
  constructor(private http:HttpClient,private _PlcaeServiceService:PlcaeServiceService) { }

  ngOnInit() {
    /*this._PlcaeServiceService
    .getPlaces().subscribe((result)=>{
      console.log("hrer")
      console.log(result)
    },(err)=>{console.log(err)})*/
    // $(window).bind('beforeunload', function(){
    //   return 'Are you sure you want to leave?';
    // });
    this.placeForm=new FormGroup(
      {
      'placeName':new FormControl(null,{validators:[Validators.required]}),
      'placeType':new FormControl(null,{validators:[Validators.required]}),
      'PhoneNumber':new FormControl(null,{validators:[Validators.required]}),
      'governrate':new FormControl(null,{validators:[Validators.required]}),
      'area':new FormControl(null,{validators:[Validators.required]}),
      'streetName':new FormControl(null,{validators:[Validators.required]}),
      'nearBy':new FormControl(null,{validators:[Validators.required]}),
      'mainImage':new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]}),
      'optimages':new FormArray([
        new FormControl(null,{validators:[Validators.required]}),
        new FormControl(null,{validators:[Validators.required]}),
        new FormControl(null,{validators:[Validators.required]})
      ]),
      'pricePer':new FormControl(null,{validators:[Validators.required]}),
      'price':new FormControl(null,{validators:[Validators.required]})
    })
    
  }

  get optimages(): FormArray {
    return this.placeForm.get('optimages') as FormArray;
  }

  //to diplay images secion
  addImgs()
  {

    $(".place-img").css({"display":"block"});
    $('html,body').scrollTop($(".place-img").offset().top)
  }
  onImagePicked(event :Event,source:string)
  {
    
    const imageFile = (event.target as HTMLInputElement).files[0];
    
    
        this.placeForm.patchValue({[source]:imageFile});
        this.placeForm.get(source).updateValueAndValidity();
        console.log( this.placeForm.get(source).value)
        const reader=new FileReader();
        reader.onload=()=>{
          this[source]=(reader.result as string);
        }
        reader.readAsDataURL(imageFile);
    
        // to sroll down 
        console.log($(".myForm").height())
        $('html,body').scrollTop($(".place-img").offset().top)

  }
  onOptImagePicked(event :Event,i)
  {
   
    
    const imageFile = (event.target as HTMLInputElement).files[0];
        //  let a = this.optimages.controls[i];
        
         this.optimages.controls[i].patchValue(imageFile);
         this.optimages.controls[i].updateValueAndValidity();
         const reader=new FileReader();
         reader.onload=()=>{
           this.optinalImages[i]=(reader.result as string);
         }
         reader.readAsDataURL(imageFile);
         console.log(this.placeForm) 

  }
 
  onSubmitForm()
  {
    /*if(!this.placeForm.valid)
    {
      console.log("invalid form ");
      return;
    }*/
   const formPlace=new FormData();
   formPlace.append("name",this.placeForm.get("placeName").value);
   formPlace.append("placeType",this.placeForm.get("placeType").value);
   formPlace.append("phoneNumber",this.placeForm.get("PhoneNumber").value);
   formPlace.append("governorate",this.placeForm.get("governrate").value);
   formPlace.append("area",this.placeForm.get("area").value);
   formPlace.append("streetName",this.placeForm.get("streetName").value);
   formPlace.append("nearBy",this.placeForm.get("nearBy").value);
   formPlace.append("mainImgPath",this.placeForm.get("mainImage").value);

   formPlace.append("imaArrary",this.placeForm.get("optimages").value[0])
   formPlace.append("imaArrary",this.placeForm.get("optimages").value[1])
   formPlace.append("imaArrary",this.placeForm.get("optimages").value[2])

   formPlace.append("pricePer",this.placeForm.get("pricePer").value);
   formPlace.append("price",this.placeForm.get("price").value);
  
    this.http.post("http://localhost:3000/api/place",formPlace).subscribe((result)=>{
      console.log(result)
    },(err)=>{
      console.log(err);
    }) 

    console.log("here")
    console.log(formPlace.getAll("imaArrary"))
   
    
  }
  removeImage(toBeRemoved:string)
  {
    
    this.placeForm.patchValue({mainImage:null});
    this.mainImage=null;
    this.placeForm.get('mainImage').updateValueAndValidity();
    $("#uploader").val("")
   

    
  }
  removeOptionalImage(i)
  {
    // get each control in the arrary of optioanl images 
    let a = this.optimages.controls[i];
    // set the value to that control 
    this.optimages.controls[i].patchValue(null);
    this.optinalImages[i]=null;
    this.optimages.controls[i].updateValueAndValidity();
  }
  showOptinalImages()
  {
    this.showOptinalImagesRow=true;
    $('html,body').scrollTop($(".optinal-images").offset().top)
    console.log(this.placeForm.valid) 
  }

}
