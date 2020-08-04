import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any
  constructor(private auth:UserAuthService) { }

  ngOnInit(){

    this.auth.loggedIn.subscribe(user=>{
      this.user=user;
    })
   
  }

}
