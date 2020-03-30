import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';
declare  const $:any
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place:object;
  constructor(private Route:Router) { 
   
  }

  ngOnInit() {
    
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
    this.Route.navigate(["/places"])
  }
  discoverOurFeature()
  {
    $("html,body").animate({scrollTop:950},500)
  }
 
}
