import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place:object;
  constructor(private Route:Router) { }

  ngOnInit() {
  }

  onSearch()
  {
    this.Route.navigate(["/places"])
  }
}
