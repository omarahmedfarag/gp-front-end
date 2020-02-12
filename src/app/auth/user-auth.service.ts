import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loggedIn:boolean=false;
  constructor() { }
}
