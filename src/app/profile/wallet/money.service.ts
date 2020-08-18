import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http:HttpClient) { }

  getMyMony():Observable<any>
  {
    return this.http.get("http://localhost:3000/api/wallet")
  }
  withDraw(userId,amount):Observable<any>
  {

    return this.http.patch(`http://localhost:3000/api/wallet/withdraw/${userId}`,{money:amount})
  }
  deposite(userId,amount):Observable<any>
  {
    return this.http.patch(`http://localhost:3000/api/wallet/deposite/${userId}`,{money:amount})
  }

}
