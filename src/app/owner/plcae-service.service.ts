import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlcaeServiceService {

  constructor( private http:HttpClient) { }



  getMyPlace():Observable<any>
  { 
    return this.http.get("http://localhost:3000/api/place/user/getplace")
  }
  postPlce(data):Observable<any>
  {
    return this.http.post("http://localhost:3000/api/place",data)
  }
  updatePlace(placeId,data):Observable<any>
  {
   
    console.log("before update")
    console.log(data)
    return this.http.patch(`http://localhost:3000/api/place/${placeId}`,data)
  }
  
}
