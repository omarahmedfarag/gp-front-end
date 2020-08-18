import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient,private router:Router) { }

  reserv(placeID,body)
  {
     this.http.post(`http://localhost:3000/api/reservation/${placeID}`,body).subscribe(()=>{
      this.router.navigate(['user/reservation'])
    })
  }
  getReservations():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/reservation");
  }
  getSingleReservation(resId):Observable<any>
  {
    return this.http.get(`http://localhost:3000/api/reservation/getone/${resId}`);
  }
  confirmReservation(resId):Observable<any>
  {
    return this.http.patch(`http://localhost:3000/api/reservation/${resId}`,"");
  }
  getPlaceReservation(placeID):Observable<any>
  {
    return this.http.get(`http://localhost:3000/api/reservation/${placeID}`)
  }
  deleteReservation(reservationID):Observable<any>
  {
    return this.http.delete(`http://localhost:3000/api/reservation/${reservationID}`);
  }

}
