import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppliedRequestService {

  constructor(private http:HttpClient) { }

  postRequest(body):Observable<any>
  {
    return this.http.post("http://localhost:3000/api/request",body)
  }
  getMyRequest():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/request/myrequest")
  }
}
