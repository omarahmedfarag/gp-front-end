import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OperationService } from '../../admin-service/operation.service';

  export interface PeriodicElement {
    state: string;
    placeName: string;
    governorate: number;
    area: string;

  }
  
@Component({
  selector: 'app-owner-requests',
  templateUrl: './owner-requests.component.html',
  styleUrls: ['./owner-requests.component.css']
})
export class OwnerRequestsComponent implements OnInit {

  dataSource :any
  loading:boolean=true
  constructor(private _OperationService:OperationService, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
     this._OperationService.getAllRequests().subscribe((result:any)=>{
      this.dataSource=result,
      this.loading=false
    })
  }
  showPlace(requestID)
  {
    this.router.navigate([`/Cpanal/owner-requests/${requestID}`])
  }

}
