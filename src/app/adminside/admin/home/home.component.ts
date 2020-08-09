import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../admin-service/operation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details:any
  constructor(private _OperationService:OperationService) { }

  ngOnInit(): void {
    this._OperationService.getDetails().subscribe(result=>{
      this.details=result;
      console.log(this.details)
    },)
  }

}
