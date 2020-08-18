import { Component, OnInit } from '@angular/core';
declare const $:any
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#container-scale").click(function(){
      $("#toogle-conatainer").toggleClass("toogle-conatainer")
      $(".setting").toggleClass("right-settings")

    })

    $(".toggle-icon").click(function(){
      $(".cpanal").toggleClass("left-collabse") 
    })
    
   
    $("#toogle-dark-mode").click(function(){
      $("#dark-mode").toggleClass("dark-cpanal")
      $(".setting").toggleClass("dark-settings")
    })
   

   /* 
    $(".toggle-icon").click(function(){
      if($(".left").width()>200)
      {
        $(".right").css({"width":"95%"})
        $(".left").css({"width":"5%"})
        $(".admin-info").css({"display":"none"})
        $(".fa-bars").css({"display":"none"})
        $(".menu-item-route").css({"display":"none"})
        $(".fa-ellipsis-v").css({"display":"block"})
        $(".menu-icon").css({"width":"100%"})
        $(".menu-item-icon").css({"width":"100%"})
      }
      else
      {
        $(".right").css({"width":"80%"})
        $(".left").css({"width":"20%"})
        $(".admin-info").css({"display":"flex"})
        $(".fa-bars").css({"display":"block"})
        $(".menu-item-route").css({"display":"block"})
        $(".menu-item-icon").css({"width":"20%"})
        $(".fa-ellipsis-v").css({"display":"none"})
        $(".menu-icon").css({"width":"20%"})
      }
      

    })*/

  }


}
