import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aggrement',
  templateUrl: './aggrement.component.html',
  styleUrls: ['./aggrement.component.css']
})
export class AggrementComponent implements OnInit {

  constructor(private _RequestService:RequestService,public router:Router,private activatedrouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  aggre()
  {
    this._RequestService.aggrement.next(true);
    this.router.navigate(['/user/request-to-be-owner'],{relativeTo:this.activatedrouter})
  }

}
