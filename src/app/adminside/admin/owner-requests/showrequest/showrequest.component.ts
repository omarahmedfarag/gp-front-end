import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/adminside/admin-service/operation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-showrequest',
  templateUrl: './showrequest.component.html',
  styleUrls: ['./showrequest.component.css']
})
export class ShowrequestComponent implements OnInit {
  alert:boolean=false
  alertReject:boolean=false
  showComment:boolean=false
  requestState:string='notreviewd'
  requestID:any
  request:any
  user:any

  constructor(private _OperationService:OperationService,
    private router:Router,
    private _ActivatedRoute:ActivatedRoute,
    private _UserAuthService:UserAuthService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((param)=>{
      this.requestID=param.id
      this._OperationService.getSingleRequest(param.id).subscribe((result)=>{
        
        this.user=result.user;
        this.request=result.request
      })
    })
  }
  onAccept()
  {
    this.alert=!this.alert
  }
  onReject()
  {
    this.alertReject=true
  }
  cancle(soure)
  {
    this._OperationService.rejectRequest(this.requestID);
     this.router.navigate(['Cpanal/owner-requests'])
    this[soure]=!this[soure]

  }
  onConfirm()
  {
    this._OperationService.approveRequest(this.requestID).subscribe((result)=>{
     this._OperationService.deleteRequest(this.requestID);
     this.router.navigate(['Cpanal/owner-requests'])
    },err=>{
      console.log(err)
    })
  }

}
