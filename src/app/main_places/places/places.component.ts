import { Component, OnInit } from '@angular/core';
import { MyPlacesService} from "../my-places.service";
import { Router } from '@angular/router';
declare const $:any
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  isLodaing:boolean=false;
  myPlaces:any;
  toogle:boolean=true;
  constructor(private _MyPlacesService:MyPlacesService,private route:Router) {
  
   }

  ngOnInit() {
   
    $("html,body").animate({
      scrollTop:0
    },500)
    this._MyPlacesService.getAllPlaces().subscribe( data=>{
     
      this.isLodaing=true;
      this.myPlaces=data.data;
      


    })

  
  }
  onSearch()
  {
    console.log("test")
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
      console.log("ll")
    }
    else
      {
        $("#search-div").css({"width":"0"});
        this.toogle=!this.toogle;
        console.log("po")
      }
    
    
  }



}
