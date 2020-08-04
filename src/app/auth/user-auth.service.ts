import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private token;
  user:any;
  loggedIn=new BehaviorSubject(false);
  constructor(private http:HttpClient) { }

  getToken()
  {
    return this.token;
  }
  login(body)
  {

    this.http.post<{status:string,token:string,user:any}>("http://localhost:3000/api/user/login",body).subscribe(result=>{
      this.token=result.token;
      this.loggedIn.next(result.user);
      this.saveToLocal(result.token,result.user);
      
    },(err)=>{
      console.log(err)
    })
  }
  signUp(body)
  {
    this.http.post<{status:string,token:string,user:any}>("http://localhost:3000/api/user/login",body).subscribe(result=>{
      this.token=result.token;
      this.loggedIn.next(result.user);
      this.saveToLocal(result.token,result.user);
      
    },(err)=>{
      console.log(err)
    })
  }

  saveToLocal(token,user)
  { 

    
    const StringUser=JSON.stringify(user)
    localStorage.setItem("token",token);
    localStorage.setItem("user",StringUser)

  }
  loadUserFromLocalStorage()
  {
    const user= JSON.parse(localStorage.getItem("user"));
    this.loggedIn.next(user);
    this.token=localStorage.getItem("token")
  }
  logOut()
  {
    this.token=null;
    this.loggedIn.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user")
  }


}
