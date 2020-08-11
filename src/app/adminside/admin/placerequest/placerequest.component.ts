import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../admin-service/operation.service';

@Component({
  selector: 'app-placerequest',
  templateUrl: './placerequest.component.html',
  styleUrls: ['./placerequest.component.css']
})
export class PlacerequestComponent implements OnInit {

  places:any
  loading:boolean=true
  alert:boolean=false
  placeId:any
  constructor(private _OperationService:OperationService) { }

  ngOnInit(): void {

    this._OperationService.getPlaceRequests().subscribe((result)=>{
      this.places=result.places
      this.loading=false
    })
  }
  showBox(id)
  {
    this.alert=true
    this.placeId=id
  }
  cancle()
  {
    this.alert=!this.alert
  }
  onConfirm()
  { 

    this._OperationService.activatePlace(this.placeId).subscribe((result)=>{
      this.alert=false
      this.loading=true
      this._OperationService.getPlaceRequests().subscribe((result)=>{
        this.places=result.places
        this.loading=false
      })
    })

    
    
    
  }

}
