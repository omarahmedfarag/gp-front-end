import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  token;
  ErrorMessage=""
  user:any;
  loggedIn=new BehaviorSubject(false);
  constructor(private http:HttpClient,private router:Router) { }

  getToken()
  {
    return this.token;
  }
  login(body):Observable<any>
  {

    return this.http.post<{status:string,token:string,user:any}>("http://localhost:3000/api/user/login",body)
  }
  signUp(body):Observable<any>
  {
    return this.http.post<{status:string,token:string,user:any}>("http://localhost:3000/api/user/signup",body)
  }
  updatedImage(id,body)
  {
    const userForm = new FormData();
    userForm.append("photo",body);
    this.http.patch<{status:string,user:any}>(`http://localhost:3000/api/user//update/${id}`,userForm).subscribe((result)=>{
      this.emiteNewUserValue(result.user);
    },(err)=>{
      console.log("Error")
      console.log(err)
    })
  }
  updatedUserInfo(id,body)
  {

    if(body.newPassword)
    {
      this.http.patch<{status:string,user:any}>(`http://localhost:3000/api/user/update/${id}`,body).subscribe((result)=>{
      this.logOut()
      this.router.navigate(["account/login"])
    },(err)=>{
    })
    return
    }
    this.http.patch<{status:string,user:any}>(`http://localhost:3000/api/user/update/${id}`,body).subscribe((result)=>{
      this.emiteNewUserValue(result.user);
    },(err)=>{
    })
  }
  // saving the user and the tokne to local storage 
  saveToLocal(token,user)
  { 

    
    const StringUser=JSON.stringify(user)
    localStorage.setItem("token",token);
    localStorage.setItem("user",StringUser)

  }

  checkOwnerShip(id)
  {

  }
  //to next/emite new user and add new user value to localStorage
  emiteNewUserValue(user)
  {
    
    this.loggedIn.next(user);
    const StringUser=JSON.stringify(user)
    localStorage.setItem("user",StringUser)
    

  }
  loadUserFromLocalStorage()
  {
    const user= JSON.parse(localStorage.getItem("user"));
    this.loggedIn.next(user);
    this.token=localStorage.getItem("token")
    console.log("iam in the load srvice");
    console.log(user);
  }
  logOut()
  {
    this.token=null;
    this.loggedIn.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user")
  }

  //get the current user to check if he becomes owner 
  getMe()
  {
    const userId=JSON.parse(localStorage.getItem("user"))._id;
    this.http.get(`http://localhost:3000/api/user/${userId}`).subscribe((result:any)=>{
    this.emiteNewUserValue(result.user);
    },err=>{
      console.log(err)
    })
  }
 


}
