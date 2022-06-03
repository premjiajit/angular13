import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set('Content-Type', 'application/json')
                                  // .set('Authorization',`Bearer $sessionStorage.getKey('auth')`)
    const cloneReq = request.clone({headers});                              
    return next.handle(cloneReq);
  }
}
