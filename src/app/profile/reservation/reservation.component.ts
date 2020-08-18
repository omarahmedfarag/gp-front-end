import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReservationService } from './reservation.service';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { Router } from '@angular/router';
import { MoneyService } from '../wallet/money.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit ,AfterViewInit{
  loading=true
  reservations:any
  reservationState="not-confirmed"
  code:string
  alert:boolean=false
  alertCancle:boolean=false
  user:any
  //clicked reservation
  reservationPrice:number
  reservationId:any
  constructor(private _ReservationService:ReservationService,
    private _UserAuthService:UserAuthService,
    private router:Router,
    private _MoneyService:MoneyService) { }

  ngOnInit(): void {
    this._ReservationService.getReservations().subscribe((result)=>{
      this.reservations=result.reservation
      this.loading=false
      
      if(this.reservations.length>0)
      {
        this.reservations.forEach(element => {
         
          if(element.state!='confirmed')
          {
            const def= new Date(element.exprieddAt).getTime()-new Date().getTime() 
            if(def>0)
            {
              setTimeout(() => {
                this.deletedReservation(element._id)
              },1000*60*30);
            }
           else
           {
            this.deletedReservation(element._id)
           }
            
          }

        });
      }
      
      console.log(this.reservations)
    },err=>{
      console.log(err)
    })  

    this._UserAuthService.loggedIn.subscribe((user)=>{
      this.user=user
    })

  }
  deletedReservation(id)
  {
    this._ReservationService.deleteReservation(id).subscribe(()=>{
      this.loading=true
      this._ReservationService.getReservations().subscribe((result)=>{
        this.reservations=result.reservation
        this.loading=false
        console.log(this.reservations)
      })
    })
  }
  onConfirm(reservationId,reservationUser)
  {
    const code=reservationId+"-"+reservationUser
    this.code=code;
    this.alert=true
  }

  closeBox(soure)
  {
    this[soure]=false
  }
  oneCanlce(id,price)
  {
    this.alertCancle=true
    this.reservationPrice=price
    this.reservationId=id
  }
  confirmCanclation()
  {
    
    this._ReservationService.deleteReservation(this.reservationId).subscribe(()=>{
      this._MoneyService.deposite(this.user._id,Math.floor(this.reservationPrice*0.7)).subscribe(()=>{
        this.router.navigate(['user/wallet'])
      })
    })

  }

  ngAfterViewInit()
  {
      
        
        var canvas = (document.getElementById("canvas") as any);
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        setInterval(drawClock, 1000);
    
    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }
    
    function drawFace(ctx, radius) {
      var grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0.5, 'white');
      grad.addColorStop(1, '#333');
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius*0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }
    
    function drawNumbers(ctx, radius) {
      var ang;
      var num;
      ctx.font = radius*0.15 + "px arial";
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
      }
    }
    
    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
    }
    
    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
      
  }

}
