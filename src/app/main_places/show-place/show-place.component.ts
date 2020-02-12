import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyPlacesService } from '../my-places.service';
import { UserAuthService } from 'src/app/auth/user-auth.service';
declare const $:any;
@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.css']
})
export class ShowPlaceComponent implements OnInit {
  id:number;
  singlePlace:object;
  loggedIn:boolean=false;
  constructor(private activeRoute:ActivatedRoute,
    private router:Router,
    private _MyPlacesService:MyPlacesService,
    private log:UserAuthService) { }

  ngOnInit() {

   this.loggedIn=this.log.loggedIn 
    this.activeRoute.params.subscribe( (params:Params)=>{
      this.id=params['id']
     
    } )
    this._MyPlacesService.getSinglePlace(this.id).subscribe( data=>{

      this.singlePlace=data.data;

      //we get single place from all places
      

    })

    


  }

  onConfirm()
  {

      $(".confirm-favorit").fadeIn();
    
  }
  cancle()
  {
    $(".confirm-favorit").hide();
  }

  
}
