import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlcaeServiceService {

  constructor( private http:HttpClient) { }



  postPlace(Place:any)
  { 

  }
  getPlaces()
  {
    console.log("from service")
  }
}
