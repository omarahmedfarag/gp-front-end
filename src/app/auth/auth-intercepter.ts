import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
    constructor(private userAuth:UserAuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler)
    {
        let authRequest;
        if(req.url.includes("http://zaeoon.com/API/zeocity"))
        {
            authRequest = req.clone({
                headers:req.headers.set("apptoken",`9c8c2718-8c1a-4962-85e1-a1afa781a514`)
            })  
            return next.handle(authRequest)          
        }
        const token=this.userAuth.getToken();
        authRequest = req.clone({
            headers:req.headers.set("Authorization",`Bearer ${token}`)
        })
        console.log(authRequest.headers)
        console.log(authRequest.url)
        return next.handle(authRequest)
    }

}