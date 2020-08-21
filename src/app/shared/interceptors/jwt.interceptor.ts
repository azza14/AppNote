import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from './../../../environments/environment';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('test interceptor');
    
    if( request.url.startsWith(environment.apiUrl)){
      // send headers
    request=request.clone({
      setHeaders:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTgwMjEyOTEsImV4cCI6MTU5ODAzMjA5MX0.NzA3aNhLwdwHgrM5ZdB2bin_V31IzgiWsckVy6ZX5j8'
      }
    });
  }
    return next.handle(request);
  }
}
