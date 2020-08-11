import { Component, OnInit } from '@angular/core';
import { MyPlacesService } from 'src/app/main_places/my-places.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare const $:any

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  hours=['1','2','3','4','5','6','7','8','9','10','11','12']
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  today:number

  favoritPlaces:any
  lodaing:boolean=true;
  constructor(private _MyPlacesService:MyPlacesService) { }

  ngOnInit(){

    
    this._MyPlacesService.getFavoritePlaces();
    this._MyPlacesService.favPlaces.subscribe(res=>{
      this.favoritPlaces=res;
      this.lodaing=false
      console.log(this.favoritPlaces)
    })

  }
  removeFavorite(id)
  {
    this.lodaing=true
    this._MyPlacesService.deleteFavorite(id);
    this.lodaing=false
  }
  showSch(event:any)
  {
    console.log(event)
    $(".empty-time").css({top: event.offsetY, left:event.offsetY});
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['back', 'next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
