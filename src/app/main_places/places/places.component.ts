import { Component, OnInit } from '@angular/core';
import { MyPlacesService} from "../my-places.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  myPlaces:any;
  constructor(private _MyPlacesService:MyPlacesService,private route:Router) {
  
   }

  ngOnInit() {
    this._MyPlacesService.getAllPlaces().subscribe( data=>{

      this.myPlaces=data.data;

    })


  }
  show(id:any)
  {

    this.route.navigate(["/show",id])
  }

}
