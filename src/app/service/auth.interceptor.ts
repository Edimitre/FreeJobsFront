import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    

    constructor(private authenticationService:AuthenticationService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

        const token = this.authenticationService.getToken()

        if (this.authenticationService.isLoggedIn()) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(req);
    }

    
}