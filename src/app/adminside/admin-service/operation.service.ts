import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {


  constructor(private http:HttpClient) { }

  /************************************* owner membership requests ****************************/


  //get some details to admin homw dashboard
  getDetails():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/user");
  }
  // get all request that need to be reviwed 
  getAllRequests():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/request")
  }
  // get single request and its corresponding user 
  getSingleRequest(requestId):Observable<any>
  {
    return this.http.get(`http://localhost:3000/api/request/${requestId}`)
  }
  //approve the request and make the user owner 
  approveRequest(requestId):Observable<any>
  {
    return this.http.patch(`http://localhost:3000/api/request/approveowner/${requestId}`,"")
  }
  // delete the request decause the user become already owner 
  deleteRequest(requestId)
  {
    this.http.delete(`http://localhost:3000/api/request/${requestId}`).subscribe(()=>{
    })
  }

  //***************************    Place request section   ***************************/

  getPlaceRequests():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/place/deactive")
  }
  activatePlace(placeId):Observable<any>
  {
    return this.http.patch(`http://localhost:3000/api/place/${placeId}`,"")
  }

}
