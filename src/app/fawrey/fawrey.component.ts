import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../profile/reservation/reservation.service';
import { MoneyService } from '../profile/wallet/money.service';

@Component({
  selector: 'app-fawrey',
  templateUrl: './fawrey.component.html',
  styleUrls: ['./fawrey.component.css']
})
export class FawreyComponent implements OnInit {

  Fawryform:FormGroup
  messege:any
  constructor(private _ReservationService:ReservationService,
    private _MoneyService:MoneyService) { }

  ngOnInit(): void {
    this.Fawryform= new FormGroup({
      "code":new FormControl(null,Validators.required)
    })
  }

  confirm()
  {
    const res=this.Fawryform.get("code").value.split("-")
    console.log(res)
    if(res[1]=="withdraw")
    {
      this._MoneyService.withDraw(res[0],+res[2]).subscribe((result)=>{
        this.messege="Confirmed Successfuly"
        console.log(result)
      },err=>{
        console.log(err)
      })
    }
    else if ( res[1]=="deposite")
    {
      this._MoneyService.deposite(res[0],+res[2]).subscribe((result)=>{
        this.messege="Confirmed Successfuly"
        console.log(result)
      },err=>{
        console.log(err)
      })
    }
    else
    {
    this._ReservationService.confirmReservation(res[0]).subscribe(result=>{
      this.messege="Confirmed Successfuly"
    },err=>{
      this.messege="Invalid Code"
      console.log(err)
    })
    }
  }
}
