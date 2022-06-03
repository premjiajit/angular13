import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { AuthService } from '../Auth/auth.service';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private _authService: AuthService
  ) { }

  private setHeaders() {
    const headersConfig = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*');

    if (this._authService.getToken()) {
      return new HttpHeaders().set('Authorization',
        `${this._authService.getToken()}`).append('Content-Type', 'application/json');
    }
    return headersConfig;
  }

  get(path: any): Observable<any> {
    return this.http.get(`${environment.API_URL}${path}`, { headers: this.setHeaders() })
     
  }

  put(path: any, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.API_URL}${path}`,
      body,
      { headers: this.setHeaders() }
    )
     // .map((res: Response) => res);
  }

  post(path: any, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.API_URL}${path}`,
      body,
      { headers: this.setHeaders() }
    )
     // .map((res: Response) => res);
  }

  delete(path: any): Observable<any> {
    return this.http.delete(
      `${environment.API_URL}${path}`,
      { headers: this.setHeaders() }
    )
     // .map((res: Response) => res);
  }
}
