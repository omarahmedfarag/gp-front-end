import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  aggrement=new BehaviorSubject<boolean>(false);
  constructor() { }
}
