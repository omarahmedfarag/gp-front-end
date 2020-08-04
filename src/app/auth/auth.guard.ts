import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from "rxjs"
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor( private auth:UserAuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| Observable<boolean>|  Promise<boolean> {
        
         let isAuth
         this.auth.loggedIn.subscribe((result)=>{
            isAuth=result;
        })

        if(!isAuth)
        {
            this.router.navigate(['user/login']);
            return false;
        }
        return true
    }

}