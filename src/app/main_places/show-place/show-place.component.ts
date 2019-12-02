import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyPlacesService } from '../my-places.service';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.css']
})
export class ShowPlaceComponent implements OnInit {
  id:number;
  singlePlace:any
  allPlaces:any
  constructor(private activeRoute:ActivatedRoute,private _MyPlacesService:MyPlacesService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe( (params:Params)=>{
      this.id=params['id']
     
    } )

    this._MyPlacesService.getAllPlaces().subscribe( data=>{

      this.allPlaces=data.data;

      //we get single place from all places
      this.singlePlace=this.allPlaces.slice()[this.id-1];
      

    })





  }

}
