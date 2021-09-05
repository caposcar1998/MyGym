import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { TokenService } from "./token.service";
import { catchError, map, mapTo } from "rxjs/operators";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private router: Router,
        private tokenService: TokenService,
        private authService: AuthService
    ){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        const refreshToken = this.tokenService.getRefreshToken();
        if(token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer' + token
                }
            });
        }
        if( !req.headers.has('Content-Type')){
            req = req.clone({
                setHeaders: {
                    'content-type' : 'application/json'
                }
            });
        }
        req = req.clone({
            headers: req.headers.set('Accept', 'application/json')
        });
        return next.handle(req).pipe(map(  (event: HttpEvent<any>) => {
            if(event instanceof HttpResponse){
                console.log('event ---> ', event);
            }
            return event;
        }), catchError((error_http: HttpErrorResponse) => {
            if(error_http.error === 401){
                if(error_http.error.error === 'invalid_token'){
                    this.authService.refreshToken({refresh_token: refreshToken}).subscribe(()=> { location.reload();});
                } else{
                    this.router.navigate(['login']).then(_ => console.log('redirect to login'));
                }
            } return throwError(error_http);
        }))
    }

}