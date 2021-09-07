import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { tap, catchError } from 'rxjs/operators';
import OAuthConnect from '../../OAuthConnect';
const OAUTH_CLIENT = OAuthConnect.oauth_client;
const OAUTH_SECRET = OAuthConnect.oauth_secret;
const API_URL = 'http://localhost:8080/';
const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded',
        Authorization: 'Basic' + btoa(OAUTH_CLIENT+OAUTH_SECRET)
    })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '';
  private static handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){ 
      console.error('Ha ocurrido un error de autenticación, error:', error. error.message);
    }else{
      console.error(
        `Backend regresa código ${error.status}`,
        `body es: ${error.error}`
      );
    }
    return throwError(error);
  }
  private static log(message: string): any {
    console.log(message);
  }
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(loginData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('email', loginData.email)
      .set('password', loginData.password)
      .set('grant_type', 'password');
  return this.http.post<any>(API_URL + 'login', body, HTTP_OPTIONS).pipe(tap(res => {
      this.tokenService.saveToken(res.access_token);
      console.log(res.access_token);
      this.tokenService.saveRefreshToken(res.refresh_token);
  }),catchError(AuthService.handleError));
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
  return this.http.post<any>(API_URL + 'refreshtoken', body, HTTP_OPTIONS).pipe(tap(res => {
      this.tokenService.saveToken(res.access_token);
      this.tokenService.saveRefreshToken(res.refresh_token);
  }),catchError(AuthService.handleError));
  }

  logout(): void{
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
  // Método de registro de usuario, se hace petición
  register(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'signup', data).pipe(tap( _ => AuthService.log('register')), catchError(AuthService.handleError));
  }
  secured(): Observable<any> {
    return this.http.get<any>(API_URL + 'secret')
      .pipe(catchError(AuthService.handleError));
  }
}
