import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  requests: PeriodicElement[] 
  displayedColumns: string[] = ['state', 'placeName', 'governorate', 'area'];
  dataSource = this.requests
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/request").subscribe((result:any)=>{
      this.dataSource=result.request,
      console.log(this.requests)
    })
  }

}
