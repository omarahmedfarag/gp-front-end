import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { MoneyService } from './money.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  loading:boolean=true
  user:any
  wallet:any

  //fawreyCode

  fawreyCode:string

  //withdraw
  clickedWithdraw:boolean=false
  getWithdrawCode:boolean=false
  withDrawAmout:number
  ifAllowed:boolean=true


  //deposite
  depositeAmount:number

  constructor(private _UserAuthService:UserAuthService,
    private _MoneyService:MoneyService) { }

  ngOnInit(): void {
    this._UserAuthService.loggedIn.subscribe((user)=>{
      this.user=user
      if(this.user)
      {
        this._MoneyService.getMyMony().subscribe((result)=>{
          this.wallet=result.wallet
          this.loading=false
        })
      }
    })
  }

  clickedWith()
  {
    this.clickedWithdraw=true
  }
  cancelWith()
  {
    this.clickedWithdraw=false
    this.withDrawAmout=null
    this.ifAllowed=true
  }
  getWithCode(state)
  {
    if(state=='withdraw')
    {
      if(this.withDrawAmout > 10 && this.withDrawAmout <= this.wallet.money)
    {
      this.fawreyCode=this.user._id+'-withdraw'+"-"+this.withDrawAmout
      this.getWithdrawCode=true


    }
    else{
      this.ifAllowed=false
      }
    }
    else
    {
      this.fawreyCode=this.user._id+'-deposite'+"-"+this.depositeAmount
      this.getWithdrawCode=true
    }
  }
  cancelWithAlert()
  {
    this.getWithdrawCode=false
  }

}
