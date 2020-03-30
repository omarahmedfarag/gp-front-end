import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observable, Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class MyPlacesService {

  constructor(private _HttpClient:HttpClient) {


   }


   
   getAllPlaces():Observable<any>
   {

      return this._HttpClient.get("http://localhost/play/public/api/places");

   }

   getSinglePlace(id:number):Observable<any>
   {
      return this._HttpClient.get("http://localhost/play/public/api/places/"+id);
   }

}
