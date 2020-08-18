import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlaceService } from './place.service';
declare  const $:any
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  gocernates:any
  areas:any
  placeTypes:any
  gender=['male','female','ALL']
  selectedtype:string="";
  selectedcity:string="";
  selectedarea:string="";
  selectedgander:string="";
  
  constructor(private Route:Router,private _HttpClient:HttpClient,private _PlaceService:PlaceService) { 
   
  }

  ngOnInit() {

    
    this.gocernates= this._PlaceService.gocernate;
    
    this.placeTypes=this._PlaceService.placeTypes;
    
    $(".fa-star").click(function()
    {
     
      if($(this).hasClass("be-favorite"))
      {
        $(this).removeClass("be-favorite")
      }
      else
      {
        $(this).addClass("be-favorite")
      }
    })
  }

  onSearch()
  {

    const searchQuery=
    {placeType:this.selectedtype==""?null:this.selectedtype,
     governorate:this.selectedcity=='' || this.selectedcity== "ALL" ?null:this.selectedcity,
     gender:this.selectedgander==""?null:this.selectedgander,
  }
    // in the query params --placeType:type.value!='0'?type.value:null-- to see wether the argument has value or not if not set it to null 
    this.Route.navigate(["places"],{queryParams:searchQuery ,queryParamsHandling:"merge"});
    
  }
  discoverOurFeature()
  {
    $("html,body").animate({scrollTop:950},500)
  }
  selectedCity()
  {
    
    let areas=this.selectedcity.replace(/ /g,"_");
    this.areas=this._PlaceService.areas[areas]
    console.log(this.selectedcity);
  }
  

  selectedType()
  {
    alert(this.selectedtype)
  }


}
