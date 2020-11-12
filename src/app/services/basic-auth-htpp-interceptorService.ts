import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './AuthenticationService';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (this.cookieService.get('accessToken')!=null) {
      req = req.clone({
        setHeaders: {
          Authorization: this.cookieService.get('accessToken')
        }
      })
    }

    return next.handle(req);

  }

}
