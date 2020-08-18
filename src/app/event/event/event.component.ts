import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  placeTypes:string[]=['GYM','TENNES','FOOTBALL','BASCKETBALL','SWIMMING','STREETWORKOUT'];

  constructor() { }

  ngOnInit(): void {
  }

}
