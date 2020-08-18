import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { mimeType } from './mime-type-validator';
import {HttpClient} from "@angular/common/http"
import { PlcaeServiceService } from '../plcae-service.service';
import { PlaceService } from 'src/app/main_places/place/place.service';
import { Router, ActivatedRoute } from '@angular/router';

declare const $:any;
@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {
  Governorates:any
  areas:any
  placeTypes:string[]=['GYM','TENNES','FOOTBALL','BASCKETBALL','SWIMMING','STREETWORKOUT'];
  gender=["male","female","ALL"]
  pricePerArr:string[]=["hour","month"]

  //mode
  mode:string=""

  placeForm:FormGroup;
  mainImage:string;
  optinalImage:string;
  optinalImages:string[]=[null,null,null];
  showOptinalImagesRow:boolean=false;
  myPlace:any
  loading:boolean=true
  constructor(
    private http:HttpClient,
    private _PlcaeServiceService:PlcaeServiceService,
    private _PlaceService:PlaceService,
    private router:Router,
    private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.Governorates=this._PlaceService.gocernate
    this._PlcaeServiceService.getMyPlace().subscribe((result)=>{
      this.myPlace=result.place
      this.loading=false
      this._ActivatedRoute.queryParams.subscribe((params)=>{
        if(params["mode"])
        {
          this.mode="update"
          this.loadDate()
        }
        else
        {
          this.mode=null;
        }
      })
    })
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
      'gender':new FormControl(null,{validators:[Validators.required]}),
      'price':new FormControl(null,{validators:[Validators.required]})
    })
    

    //get the query params to check the mode 
  

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
    /*
    if(!this.placeForm.valid)
    {
     
      return;
    }
    
    */
  
  
   if(this.mode=='update')
   {
    this.loading=true
    const data=
    {
      name:this.placeForm.get("placeName").value,
      placeType:this.placeForm.get("placeType").value,
      phoneNumber:this.placeForm.get("PhoneNumber").value,
      governorate:this.placeForm.get("governrate").value,
      area:this.placeForm.get("area").value,
      streetName:this.placeForm.get("streetName").value,
      nearBy:this.placeForm.get("nearBy").value,
      mainImgPath:this.placeForm.get("mainImage").value,
      imaArrary:[this.placeForm.get("optimages").value[0],this.placeForm.get("optimages").value[1],this.placeForm.get("optimages").value[2]],
      pricePer:this.placeForm.get("pricePer").value,
      price:this.placeForm.get("price").value,
      gender:this.placeForm.get("gender").value,
      owner:this.myPlace.owner
    }
     this._PlcaeServiceService.updatePlace(this.myPlace._id,data).subscribe((result)=>{
      console.log(result)
      this.loading=true
      this.router.navigate(['user/add-place'])
    },(err)=>{
       console.log(err);
     }) 

   }
   else
   {
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
   formPlace.append("gender",this.placeForm.get("gender").value);
     this._PlcaeServiceService.postPlce(formPlace).subscribe((result)=>{
       this.loading=true
     },(err)=>{
       console.log(err);
     }) 

   }
    
     
   

    
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

  

  onUpdate()
  {
    this.router.navigate(['user/add-place'],{queryParams:{mode:"update"}})
   this.loadDate()
  }
  loadDate()
  {
    this.placeForm.patchValue({placeName:this.myPlace.name})
    this.placeForm.patchValue({placeType:this.myPlace.placeType})
    this.placeForm.patchValue({PhoneNumber:this.myPlace.phoneNumber})
    this.placeForm.patchValue({governrate:this.myPlace.governorate})
    this.onCitySelected() // to fill the area array depinding on the selected governrate then path tha value  
    this.placeForm.patchValue({area:this.myPlace.area})

   
    this.placeForm.patchValue({streetName:this.myPlace.streetName})
    this.placeForm.patchValue({nearBy:this.myPlace.nearBy})
    this.placeForm.patchValue({mainImage:this.myPlace.mainImgPath})
    this.placeForm.patchValue({pricePer:this.myPlace.pricePer})
    this.placeForm.patchValue({gender:this.myPlace.gender})
    this.placeForm.patchValue({price:this.myPlace.price})
    this.placeForm.patchValue({optimages:this.myPlace.imaArrary})
    //patch Photo 
    this.mainImage=this.myPlace.mainImgPath;
    this.optinalImages=[];
    this.myPlace.imaArrary.forEach(element => {
      console.log(element)
      this.optinalImages.push(element)
    });
  
    
  }

  onCitySelected()
  {
    let areasCode=this.placeForm.get("governrate").value.replace(/ /g,"_");
    this.areas=this._PlaceService.areas[areasCode]
  }
}
