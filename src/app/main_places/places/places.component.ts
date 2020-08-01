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
  numOfPages=[10];
  length=200;
  pageSize=10;
  seletedPrice=1000;
  isLodaing:boolean=false;
  allPlaces:Place[];
  toogle:boolean=true;
  filter:any[]=[];
  
  constructor(private _MyPlacesService:MyPlacesService,private route:Router,private activatedRoute:ActivatedRoute) {
  
   }

  ngOnInit() {
   
    $("html,body").animate({
      scrollTop:0
    },500)

    this._MyPlacesService.getAllPlaces().subscribe( data=>{
     
      this.isLodaing=true;
      //this.myPlaces=data.data;
      this.allPlaces=data.data
      console.log(this.allPlaces)      
    })

    this.activatedRoute.queryParams.subscribe((params)=>{
      console.log(params);
      const filterarry=[];
      this.filter=[];
      for(let key in params)
      {
        this.filter.push({key,value:params[key]})
      }
     
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
    const searchQuery={placeType:type.value!='0'?type.value:null,governorate:city.value!='0'?city.value:null,erea:area!='0'?area:null}
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

    this.route.navigate([],{queryParams :{[key]:value} , queryParamsHandling:'merge'} )
  }
  removeQueryParams(value)
  {

    this.route.navigate([],{queryParams :{[value]:null} , queryParamsHandling:'merge'} )
    const index=this.filter.indexOf(value)
    this.filter.splice(index,1);
  }



}
