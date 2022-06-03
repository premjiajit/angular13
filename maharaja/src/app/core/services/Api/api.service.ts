import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders ,HttpHeaderResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { AuthService } from '../Auth/auth.service';
import { Observable, throwError } from 'rxjs';



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

  ///  PG used

  getCall(endpoint: string , params: HttpParams = new HttpParams()): Observable<any>{
    return this.http.get(`${environment.API_URL}${endpoint}`,{params}).pipe(catchError(this.handelError));
  }
  
  putCall(endpoint: string , body : Object={}): Observable<any>{
    return this.http.put(`${environment.API_URL}${endpoint}`,JSON.stringify(body)).pipe(catchError(this.handelError));
  }
  postCall(endpoint: string , body : Object={}): Observable<any>{
   return this.http.post(`${environment.API_URL}${endpoint}`,JSON.stringify(body)).pipe(catchError(this.handelError));
  }
  uploadFile(endpoint: string , formData : FormData): Observable<any>{
    return this.http.post(`${environment.API_URL}${endpoint}`,formData).pipe(catchError(this.handelError));
   }
  deleteCall(endpoint: string): Observable<any>{
    return this.http.delete(`${environment.API_URL}${endpoint}`).pipe(catchError(this.handelError));
   }
  deleteCallwithBody(endpoint: string, body: any ): Observable<any>{
    return this.http.delete(`${environment.API_URL}${endpoint}`, body ).pipe(catchError(this.handelError));
   }
  public readJSONFile(filename: string){
    return this.http.get('./asset/'+filename);

  }

  handelError(error: HttpErrorResponse){
    return throwError('Something bad Happened, please try again later')
  }
}
