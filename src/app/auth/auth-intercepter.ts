import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
    constructor(private userAuth:UserAuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler)
    {
        const token=this.userAuth.getToken();
        const authRequest = req.clone({
            headers:req.headers.set("Authorization",`Bearer ${token}`)
        })
        return next.handle(authRequest)
    }

}