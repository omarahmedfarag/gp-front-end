import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {observable, Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class MyPlacesService {

  constructor(private _HttpClient:HttpClient) {


   }


   
   getAllPlaces(query:any):Observable<any>
   {

      let queryobj=JSON.stringify(query).replace(/(:)/g,"=")
      queryobj=queryobj.replace(/(")/g,"").replace(/(,)/g,"&")
      queryobj=queryobj.replace(/({)/g,"").replace(/(})/g,"")
      if(queryobj != "any")
      {
         queryobj=`?${queryobj}`;
         console.log(queryobj)
      }
      else{
         queryobj='';
      }

      const httpHeaders: HttpHeaders = new HttpHeaders({
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjZiZGUwYmIxYjM5MzMwODYwYTRjMCIsImlhdCI6MTU5NjQxMzA2NSwiZXhwIjoxNjA0MTg5MDY1fQ.xS4FI0y11qcMovWYW9MXCIC96CmL52ZJyymn7CKVs_0'
     });
       return this._HttpClient.get(`http://localhost:3000/api/place${queryobj}`,{ headers: httpHeaders });

      
      

   }

   getSinglePlace(id:number)
   {
   }

}
