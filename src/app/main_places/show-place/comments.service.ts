import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  postComment(placeId,data):Observable<any>
  {
    return this.http.post(`http://localhost:3000/api/review/${placeId}`,{comment:data})
  }
  getComments(placeId):Observable<any>
  {
    return this.http.get(`http://localhost:3000/api/review/${placeId}`)
  }

}
