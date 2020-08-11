import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyPlacesService } from '../my-places.service';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { Place } from '../place.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ReservationService } from 'src/app/profile/reservation/reservation.service';
declare const $:any;
@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.css']
})
export class ShowPlaceComponent implements OnInit {

  hours=['1','2','3','4','5','6','7','8','9','10','11','12']
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  todayIS:number
  monthIS:number
  
  
  placeId:number;
  singlePlace:any;
  loading=true
  loggedIn:boolean=false;




  alert:boolean=false
  reservedHour:any
  reservedDay:any


  constructor(private activeRoute:ActivatedRoute,
    private router:Router,
    private _MyPlacesService:MyPlacesService,
    private _UserAuthService:UserAuthService,
    private _ReservationService:ReservationService) { }

  ngOnInit() {
    
    const n=new Date().getDay()
    this.todayIS=new Date().getDate();
    this.monthIS=new Date().getMonth()+1;
    const subday=[...this.days.slice(0,n)];
    this.days.splice(0,n);
    this.days=this.days.concat(subday);
    this.activeRoute.params.subscribe((result)=>{
      this.placeId=result.id
      this._MyPlacesService.getSinglePlace(result.id).subscribe((placeResult)=>{
        this.singlePlace=placeResult.place
        console.log(this.singlePlace)
        this.loading=false
      })

    })

  }
 
  reserve(dayNumber,hour,day)
  {

    this.reservedHour=hour
    this.reservedDay=dayNumber;
    console.log("Today is "+ day +" and in number is "+dayNumber+" and time to be reserved is "+ hour);
    this.alert=true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-backward"></i>', '<i class="fas fa-forward"></i>'],
    responsive: {
      0: {
        items: 2
      },
      350: {
        items: 1
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

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-backward"></i>', '<i class="fas fa-forward"></i>'],
    responsive: {
      0: {
        items: 2
      },
      350: {
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

  cancle()
  { 
    this.alert=false

  }
  
  onConfirm()
  {
    const reservationData={
      startAt:this.reservedHour,
      startedDay:this.reservedDay,
      endAt:this.reservedHour+1,
      pricePer:this.singlePlace.pricePer,
      price:this.singlePlace.price}
      this._ReservationService.reserv(this.singlePlace._id,reservationData)

  }



  
}
