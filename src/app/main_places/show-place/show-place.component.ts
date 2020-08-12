import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyPlacesService } from '../my-places.service';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { Place } from '../place.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ReservationService } from 'src/app/profile/reservation/reservation.service';
import { CommentsService } from './comments.service';
declare const $:any;
@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.css']
})
export class ShowPlaceComponent implements OnInit {

  //needed array to be desplaied
  hours=['1','2','3','4','5','6','7','8','9','10','11','12']
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  // to know what is current day and moth 
  tomorrowIS:number
  monthIS:number
  
  //place details
  placeId:number;
  singlePlace:any;
  loading=true
  loggedIn:boolean=false;

  //reservation information to be submited into db
  reservedHour:any
  reservedDay:any
  reservedDate:any

  //alert box to confirm reservation 
  alert:boolean=false
  

  //reservedTime

  reservationsTime:any[]


  //comment section 
  showcomment:boolean=false
  commnet:String;
  comments:any
  constructor(private activeRoute:ActivatedRoute,
    private router:Router,
    private _MyPlacesService:MyPlacesService,
    private _UserAuthService:UserAuthService,
    private _ReservationService:ReservationService,
    private _CommentsService:CommentsService
    ) { }

  ngOnInit() {
    
    // data handlling 
    const n=new Date().getDay()
    this.tomorrowIS=new Date().getDate()+1;
    this.monthIS=new Date().getMonth()+1;
    const subday=[...this.days.slice(0,n+1)];
    this.days.splice(0,n+1);
    this.days=this.days.concat(subday);


    //get place by id 
    this.activeRoute.params.subscribe((result)=>{
      this.placeId=result.id
      this._MyPlacesService.getSinglePlace(result.id).subscribe((placeResult)=>{
        this.singlePlace=placeResult.place
        this.loading=false
      })

    })

    // get the reserved time accoding to current place not to display it in the time section 
    this._ReservationService.getPlaceReservation(this.placeId).subscribe((result)=>{
      this.reservationsTime=result.reservationTime;
      
    })


    // get all comment for the current place 
    this._CommentsService.getComments(this.placeId).subscribe((data)=>{
      this.comments=data.data
    })


  }
 
  reserve(dayNumber,hour,day)
  {

    this.reservedHour=hour
    this.reservedDay=dayNumber;
    this.reservedDate=`${day} : ${dayNumber}-${this.monthIS}`
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


  checkIfTimeAvailable(hour,day)
  {
    
    const check = this.reservationsTime.filter(element => {
      return (element.startAt==hour && element.startedDay==day)
    });

    return check.length!=0 ? true :false
   
  }

  toggleComments(value)
  {
    this.showcomment=value
  }

  submitComment()
  {
    if(!this.commnet)
    {
      return
    }
    alert(this.commnet)
    this._CommentsService.postComment(this.placeId,this.commnet).subscribe((result)=>{
      this.comments.unshift(result.review)
    },err=>{
      console.log(err)
    })

  }

  
}
