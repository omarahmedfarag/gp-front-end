import { Component, OnInit } from '@angular/core';
import { MyPlacesService} from "../my-places.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Place } from '../place.model';
declare const $:any
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  placeTypes:string[]=['GYM','TENNES','FOOTBALL','BASCKETBALL','SWIMMING','STREETWORKOUT'];
  numOfPages=[10];
  length=200;
  pageSize=10;
  seletedPrice=1000;
  isLodaing:boolean=true;
  allPlaces:Place[];
  toogle:boolean=true;
  filter:any[]=[];
  queryParams:{}
  
  constructor(private _MyPlacesService:MyPlacesService,private route:Router,private activatedRoute:ActivatedRoute) {
  
   }

  ngOnInit() {
   
    $("html,body").animate({
      scrollTop:0
    },500)

    this._MyPlacesService.getAllPlaces("any").subscribe( data=>{

      
      //this.myPlaces=data.data;
      this.allPlaces=data.data  
      this.isLodaing=false;
      console.log(this.allPlaces)  
    },(err)=>{
      console.log(err)
    })

    //get queryParams from url 
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.queryParams=params
      const filterarry=[];
      this.filter=[];
      for(let key in params)
      {
        if(key=="sort")
        {
          if(params[key]=="createdAt")
          {
            this.filter.push({key,value:"old"})
          }
          else
          {
            this.filter.push({key,value:"new"})
          }
          
        }
        else{
          this.filter.push({key,value:params[key]})  
        }
        
      }

      this._MyPlacesService.getAllPlaces(this.queryParams).subscribe(result=>{
        this.allPlaces=result.data
      })
     
    })

    $(window).scroll(
     function(){
      
       if($(window).scrollTop()>175)
       {
         if(!$(".filters").hasClass("filter"))
         {
          $(".filters").addClass("filter");
         }
         
       }
       else
       {
        if($(".filters").hasClass("filter"))
         {
          $(".filters").removeClass("filter");
         }
       }
     }
    )

  
  }
  onSearch(type:HTMLInputElement,city:HTMLInputElement,area="initail")
  {
    const searchQuery={placeType:type.value!='0'?type.value:null,governorate:city.value=='0' || city.value== "All" ?null:city.value}
    // in the query params --placeType:type.value!='0'?type.value:null-- to see wether the argument has value or not if not set it to null 
    this.route.navigate([],{queryParams:searchQuery ,queryParamsHandling:"merge"});
    
  }
  show(id:any)
  {

    this.route.navigate(["/show",id])
  }
  toggleSearch()
  {
    if(this.toogle)
    {
      $("#search-div").css({"width":"100%"});
      this.toogle=!this.toogle;
    }
    else
      {
        $("#search-div").css({"width":"0"});
        this.toogle=!this.toogle;
      }
    
    
  }
  onTouched(e)
  {
    this.seletedPrice=e.value;
    console.log(e)
  }

  //how to use query params on url deleting 
  filterByQuery(key,value)
  {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.queryParams=params
    })
    this.route.navigate([],{queryParams :{[key]:value} , queryParamsHandling:'merge'} )
    

  }
  removeQueryParams(value)
  {

    this.route.navigate([],{queryParams :{[value]:null} , queryParamsHandling:'merge'} )
    const index=this.filter.indexOf(value)
    this.filter.splice(index,1);
  }



}
